import {Schema, model} from 'mongoose'
import Cart from "./Cart";

const Purchase = new Schema({
    items:
        [{
            id: {type: String, required: true},
            type: {type: String, required: true},
            count: {type: Number, required: true},
            name: {type: String, required: true},
            price: {type: Number, required: true}
        }],
    totalPrice: {type: Number, required: true},
    date: { type: Date, default: Date.now },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true }
})

export default model('purchase', Purchase)
