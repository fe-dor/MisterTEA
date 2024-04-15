import Admin from "./models/Admin";
import {compareSync} from "bcrypt-ts";
import {typeMap} from "./typeMap";

export async function sign(user: admin) {
    const userInDB = await Admin.findOne({login: user.login})
    return userInDB ? compareSync(user.password, userInDB.password) : false
}

export function put(id: string, type: string, newValues: product) {
    return typeMap.get(type)?.findByIdAndUpdate(id, newValues, {new: true})
}

export async function post(type: string, newProduct: product) {
    const Model = typeMap.get(type)
    if (Model === undefined)
        return new Response("incorrect object type", {status: 400})
    const object = new Model({
        ...newProduct
    })
    return await object.save()
}

export async function remove(type: string, id: string) {
    const Model = typeMap.get(type)
    if (Model === undefined)
        return new Response("incorrect object type", {status: 400})
    return Model.deleteOne({"_id": id})
}

type admin = {
    login: string,
    password: string
}

type product = {
    name: string,
    price: number,
    description: string,
    count: number
}
