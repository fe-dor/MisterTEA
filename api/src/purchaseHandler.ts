import transporter from "./mailTransporter";
import Cart from "./models/Cart";
import {Types} from "mongoose";
import {typeMap} from "./typeMap";
import Purchase from "./models/Purchase";

export default async function purchaseHandle(cart: string, purchase: simplePurchase) {
    // get cart from db
    const cartObject = await Cart.findById(cart)
    if (cartObject === undefined || cartObject === null)
        return new Response("can't get cart", {status: 400})
    let [itemsList, totalPrice] = [cartObject.items, cartObject.totalPrice]

    // increment count for products in cart
    let Model
    for (let i = 0; i < itemsList.length; i++) {
        Model = typeMap.get(itemsList[i].type)
        if (Model === undefined)
            return new Response("can't find object type for item", {status: 400})
        const productObject = await Model.findById(itemsList[i].id)
        if (productObject === undefined || productObject?.price === undefined || productObject?.count === undefined)
            return new Response("can't get item", {status: 400})
        if (productObject.count - itemsList[i].count < 0)
            return new Response("not enough items in stock: " + productObject.name, {status: 400})
        productObject.set({ count: (productObject.count -= itemsList[i].count) })
        await productObject.save()
    }

    // create purchase object
    const purchaseObject = new Purchase({
        items: itemsList,
        totalPrice: totalPrice,
        date: new Date(),
        name: purchase.name,
        lastname: purchase.lastname,
        phone: purchase.phone,
        email: purchase.email,
        address: purchase.address
    })
    await purchaseObject.save()

    // send message to client
    const customerMail = {
        from: Bun.env.GMAIL_USER,
        to: `${purchase.email}`,
        subject: `Приветствуем, ${purchase.name}!`,
        html: '<div>' +
            '<h1 style="font-size: 18px">Вы оставили заявку на покупку!</h1>' +
            `<p style="font-size: 14px">Пожалуйста проверьте выбранные товары:</p>` +
            `<ul>${getPurchasesInHTML(itemsList)}</ul>` +
            `<p style="font-size: 14px">Сумма покупки: ${totalPrice}</p>` +
            `<p style="font-size: 10px">С уважением, MisterTEA</p>` +
            `<p style="font-size: 11px">parashchenko.fedor@gmail.com</p>` +
            '</div>'
    }
    await transporter.sendMail(customerMail)

    // send message for us
    const ourMail = {
        from: Bun.env.GMAIL_USER,
        to: Bun.env.GMAIL_USER,
        subject: `Заказ на ${totalPrice}р`,
        html: '<div>' +
            `<p style="font-size: 12px">${purchase.name}</p>` +
            `<p style="font-size: 12px">${purchase.lastname}</p>` +
            `<p style="font-size: 12px">${purchase.phone}</p>` +
            `<p style="font-size: 12px">${purchase.email}</p>` +
            `<p style="font-size: 12px">${purchase.address}</p>` +
            `<ul>${getPurchasesInHTML(itemsList)}</ul>` +
            `<p style="font-size: 14px">Сумма покупки: ${totalPrice}</p>` +
            '</div>'
    }
    await transporter.sendMail(ourMail)

    // delete cart
    await Cart.deleteOne({_id: cart})

    return 'success'
}

type simplePurchase = {
    name: string,
    lastname: string,
    phone: string,
    email: string,
    address: string
}

function getPurchasesInHTML(
    itemsList: Types.DocumentArray<{id: string, type: string, count: number, name: string, price: number}>
): string {
    let lines: string[] = []
    for (let i = 0; i < itemsList.length; i++) {
        lines.push(`<li style="font-size: 12px">${itemsList[i].name}: ${itemsList[i].count} шт.</li>`)
    }
    return lines.join('')
}