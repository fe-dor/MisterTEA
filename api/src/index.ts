import {Elysia, t} from "elysia";
import * as mongoose from "mongoose";
import {BlackTea, FlavoredTea, FruitTea, GreenTea, Other} from "./models/Product";
import Cart from "./models/Cart";
import {addItemToCart, createCart, getCart, removeItemFromCart} from "./cartHandler";
import contactHandle from "./contactHandler";
import purchaseHandle from "./purchaseHandler";
import {post, put, remove, sign} from "./adminHandler";
import {jwt} from "@elysiajs/jwt";
import {cookie} from "@elysiajs/cookie";
import { swagger } from '@elysiajs/swagger'


await mongoose.connect(<string>Bun.env.MONGO)

const app = new Elysia()
    .use(swagger())

    // catalog
    .get("/green",  () => { return GreenTea.find() })
    .get("/green/:id",  ({ params: { id } }) => { return GreenTea.findById(id) })
    .get("/black",  () => { return BlackTea.find() })
    .get("/black/:id",  ({ params: { id } }) => { return BlackTea.findById(id) })
    .get("/fruit",  () => { return FruitTea.find() })
    .get("/fruit/:id",  ({ params: { id } }) => { return FruitTea.findById(id)} )
    .get("/flavored",  () => { return FlavoredTea.find() })
    .get("/flavored/:id",  ({ params: {id } }) => { return FlavoredTea.findById(id) })
    .get("/other",  () => { return Other.find() })
    .get("/other/:id",  ({ params: {id } }) => { return Other.findById(id) })

    // create new cart and return their ID
    .post("/create_cart", async ({set}) => {
        const cart = await createCart()
        set.headers['Set-Cookie'] =
            `cart=${cart._id}; Max-Age=${7 * 86400}; HttpOnly; Path=/`
        return cart
    })
    // get cart by id
    .get("/cart",  ({ cookie: { cart } }) => { return getCart(cart.toString()) })
    // add item to cart and return updated cart
    .post("/cart/:type/:id/:num",  ({ params: { type, id, num }, cookie: { cart } }) => {
        return addItemToCart(cart.toString(), type, id, Number(num)) })
    // remove item from cart and return updated cart
    .put("/cart/:id",  ({ params: { id  }, cookie: { cart } }) => {
        return removeItemFromCart(cart.toString(), id) })

    // purchase
    .post("/purchase", ( { cookie: { cart }, body }) => {
        return purchaseHandle(cart.toString()   , body)
    }, {
        body: t.Object({
            name: t.String(),
            lastname: t.String(),
            phone: t.String(),
            email: t.String(),
            address: t.String()
        })
    })

    // contact
    .post("/contact", ({ body }) => {
        return contactHandle(body)
    }, {
        body: t.Object({
            theme: t.String(),
            description: t.String(),
            name: t.String(),
            lastname: t.String(),
            phone: t.String(),
            email: t.String({ format: 'email' })
        })
    })

    // admin
    .group("/admin", (app) =>
        app
            .use(
                jwt({
                    name: 'jwt_token',
                    exp: '2d',
                    secret: <string>Bun.env.JWT
                })
            ).use(cookie())
            .post('/auth', async ({ body, jwt_token, set }) => {
                if (!await sign(body))
                    return new Response("invalid username or password", {status: 400})
                set.headers['Set-Cookie'] =
                    `auth=${await jwt_token.sign({"info": "Token for admin"})}; Max-Age=${2 * 86400}; HttpOnly; Path=/`
                return "auth success"
            }, {
                body: t.Object({
                    login: t.String(),
                    password: t.String()
                })
            })
            .put('/edit/:type/:id', async ({
                                               params: {id, type},
                                               body,
                                               jwt_token,
                                               cookie: { auth}
                                            }) => {
                if (!await jwt_token.verify(auth.toString()))
                    return new Response("can't verify user", {status: 400})
                return put(id, type, body)
            }, {
                body: t.Object({
                    name: t.String(),
                    price: t.Number(),
                    description: t.String(),
                    count: t.Number()
                })
            })
            .post('/add/:type', async ({
                                           params: {type},
                                           body,
                                           jwt_token,
                                           cookie: {auth}
                                       }) => {
                if (!await jwt_token.verify(auth.toString()))
                    return new Response("can't verify user", {status: 400})
                return post(type, body)
            }, {
                body: t.Object({
                    name: t.String(),
                    price: t.Number(),
                    description: t.String(),
                    count: t.Number()
                })
            })
            .delete('/remove/:type/:id', async ({
                                                    params: {id, type},
                                                    jwt_token,
                                                    cookie: { auth}
                                                }) => {
                if (!await jwt_token.verify(auth.toString()))
                    return new Response("can't verify user", {status: 400})
                return remove(type, id)
            })
    )

    .listen(Number(<string>Bun.env.PORT))

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

/*const lunCin = new GreenTea({
    name: "Зеленый чай ЛунЦзин (Колодец Дракона). Урожай 2023 года",
    price: 578,
    description: "Отличный повседневный вариант знаменитого сорта китайского зеленого чая." +
        " Чай Колодец Дракона, цена которого демократична, а качество не уступает элитным сортам " +
        "прекрасно, подойдет тем, кто только начинает свое знакомство с настоящим китайским чаем. ",
    count: 50
})*/

/*lunCin.save().then(() => {console.log("Written in DB successfully")});*/

