import {Elysia, t} from "elysia";
import * as mongoose from "mongoose";
import {BlackTea, FlavoredTea, FruitTea, GreenTea, Other} from "./models/Product";
import {addItemToCart, createCart, getCart, removeItemFromCart} from "./cartHandler";
import contactHandle from "./contactHandler";
import purchaseHandle from "./purchaseHandler";
import {post, put, remove, sign} from "./adminHandler";
import {jwt} from "@elysiajs/jwt";
import {cookie} from "@elysiajs/cookie";
import {swagger} from '@elysiajs/swagger'
import {cors} from '@elysiajs/cors'


await mongoose.connect(<string>Bun.env.MONGO)

const app = new Elysia()
    .use(swagger())
    .use(cors())

    // catalog
    .get("/green",  () => { return GreenTea.find() })
    .get("/green/:id", async ({params: {id}}) => {
        return (await GreenTea.findById(id))?.toJSON()
    })
    .get("/black",  () => { return BlackTea.find() })
    .get("/black/:id",  async ({params: {id}}) => {
        return (await BlackTea.findById(id))?.toJSON()
    })
    .get("/fruit",  () => { return FruitTea.find() })
    .get("/fruit/:id",  async ({params: {id}}) => {
        return (await FruitTea.findById(id))?.toJSON()
    })
    .get("/flavored",  () => { return FlavoredTea.find() })
    .get("/flavored/:id",  async ({params: {id}}) => {
        return (await FlavoredTea.findById(id))?.toJSON()
    })
    .get("/other",  () => { return Other.find() })
    .get("/other/:id",  async ({params: {id}}) => {
        return (await Other.findById(id))?.toJSON()
    })

    // create new cart and return their ID
    .post("/create_cart", async ({ set }) => {
        const cart = await createCart()
        set.headers['Access-Control-Allow-Origin'] = <string>Bun.env.CLIENT
        set.headers['Set-Cookie'] =
            `cart=${cart._id}; Max-Age=${7 * 86400}; HttpOnly; Path=/`
        return cart
    })
    // get cart by id
    .get("/cart",  async ({set, cookie: {cart}}) => {
        set.headers['Access-Control-Allow-Origin'] = <string>Bun.env.CLIENT
        return await getCart(cart.toString())
    })
    // add item to cart and return updated cart
    .post("/cart/:type/:id/:num",  async ({ set, params: { type, id, num }, cookie: { cart } }) => {
        set.headers['Access-Control-Allow-Origin'] = <string>Bun.env.CLIENT
        return await addItemToCart(cart.toString(), type, id, Number(num))
    })
    // remove item from cart and return updated cart
    .put("/cart/:id",  async ({ set, params: { id  }, cookie: { cart } }) => {
        set.headers['Access-Control-Allow-Origin'] = <string>Bun.env.CLIENT
        return await removeItemFromCart(cart.toString(), id)
    })
    .options("/cart/:id", ({ set }) => {
        set.headers['Access-Control-Allow-Origin'] = <string>Bun.env.CLIENT
        set.headers['Content-Type'] = 'application/json'
        set.headers['Access-Control-Allow-Headers'] = 'content-type'
        set.headers['Access-Control-Allow-Methods'] = 'PUT'
        return
    })

    // purchase
    .post("/purchase", async ( { set, cookie: { cart }, body }) => {
        set.headers['Access-Control-Allow-Origin'] = <string>Bun.env.CLIENT
        return await purchaseHandle(cart.toString(), body)
    }, {
        body: t.Object({
            name: t.String(),
            lastname: t.String(),
            phone: t.String(),
            email: t.String(),
            address: t.String()
        })
    })
    .options("/purchase", ({ set }) => {
        set.headers['Access-Control-Allow-Origin'] = <string>Bun.env.CLIENT
        set.headers['Content-Type'] = 'application/json'
        set.headers['Access-Control-Allow-Headers'] = 'content-type'
        return
    })

    // contact
    .post("/contact", async ({body}) => {
        return await contactHandle(body)
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
