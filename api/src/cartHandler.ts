import Cart from "./models/Cart";
import {typeMap} from "./typeMap";
import {it} from "bun:test";
import {Types} from "mongoose";

export async function createCart() {
    const newCart = new Cart({
        items: [],
        totalPrice: 0,
        expireAt: new Date((new Date().valueOf() + (86400 * 7 * 1000)))
    })
    return (await newCart.save()).toJSON()
}

export async function getCart(cart: string) {
    // get cart from db
    const cartObject = await Cart.findById(cart)
    if (cartObject === undefined || cartObject === null)
        return new Response("can't get cart", {status: 400})
    let [itemsList, totalPrice] = [cartObject.items, cartObject.totalPrice]

    // check for items
    let Model
    for (let i = 0; i < itemsList.length; i++) {
        Model = typeMap.get(itemsList[i].type)
        if (Model === undefined)
            return new Response("can't find object type for item", {status: 400})
        const productObject = await Model.findById(itemsList[i].id)
        if (productObject === undefined || productObject?.price === undefined || productObject?.count === undefined)
            return new Response("can't get item", {status: 400})
        if (productObject.count - itemsList[i].count < 0){
            const delta = itemsList[i].price / itemsList[i].count
            totalPrice -= delta * (itemsList[i].count -  productObject.count)
            if (productObject.count > 0) {
                itemsList[i].price = delta *  productObject.count
                itemsList[i].count = productObject.count
            } else {
                itemsList.pull({ _id: itemsList[i]._id })
                i--
            }
        }
    }
    cartObject.set({items: itemsList, totalPrice: totalPrice, expireAt: new Date(new Date().valueOf() + (86400 * 7 * 1000))})
    return await cartObject.save()
}
export async function addItemToCart(cart: string, type: string, id: string, count: number) {
    // get product
    const Model = typeMap.get(type)
    if (Model === undefined)
        return new Response("incorrect object type", {status: 400})
    const productObject = await Model.findById(id)
    if (productObject === undefined || productObject?.price === undefined || productObject?.count === undefined)
        return new Response("can't get item", {status: 400})
    if (productObject.count - count < 0)
        return new Response("not enough item in stock", {status: 400})

    // get cart from db
    const cartObject = await Cart.findById(cart)
    if (cartObject === undefined || cartObject === null)
        return new Response("can't get cart", {status: 400})
    let [itemsList, totalPrice] = [cartObject.items, cartObject.totalPrice]

    // check if this product already in cart, in that case do increment count field. otherwise add to list
    if (!isThisProductInCart(itemsList, id, count, productObject.price))
        itemsList.push({id: id, type: type, count: count, name: productObject.name, price: count * productObject.price})

    // increment total price
    totalPrice += productObject.price * count

    // update cart
    cartObject.set({ items: itemsList, totalPrice: totalPrice, expireAt: new Date(new Date().valueOf() + (86400 * 7 * 1000)) })
    return (await cartObject.save()).toJSON()
}

export async function removeItemFromCart(cart: string, id: string) {
    // get cart from db
    const cartObject = await Cart.findById(cart)
    if (cartObject === undefined || cartObject === null)
        return new Response("can't get cart", {status: 400})
    let [itemsList, totalPrice] = [cartObject.items, cartObject.totalPrice]

    // find current item in cart
    for (let i = 0; i < itemsList.length; i++) {
        if (id === itemsList[i].id) {
            if (itemsList[i].count == 1) {
                totalPrice -= itemsList[i].price
                itemsList.pull({ _id: itemsList[i]._id })
            } else {
                const delta = itemsList[i].price / itemsList[i].count
                itemsList[i].price -= delta
                itemsList[i].count -= 1
                totalPrice -= delta
            }
            break
        }
    }

    // update cart
    cartObject.set({ items: itemsList, totalPrice: totalPrice, expireAt: new Date(new Date().valueOf() + (86400 * 7 * 1000)) })
    return cartObject.save()
}

function isThisProductInCart(
    itemsList:  Types.DocumentArray<{id: string, type: string, count: number, name: string, price: number}>,
    id: string,
    count: number,
    price: number){
    for (let i = 0; i < itemsList.length; i++) {
        if (itemsList[i].id === id) {
            itemsList[i].count += count
            itemsList[i].price += count * price
            return true
        }
    }
    return false
}