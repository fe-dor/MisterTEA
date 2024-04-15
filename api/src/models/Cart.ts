import {Schema, model} from 'mongoose'

const Cart = new Schema({
    items:
    [{
        id: {type: String, required: true},
        type: {type: String, required: true},
        count: {type: Number, required: true},
        name: {type: String, required: true},
        price: {type: Number, required: true}
    }],
    totalPrice: {type: Number, required: true},
    expireAt: { type: Date, expires: 0 }
})

export default model('cart', Cart)
