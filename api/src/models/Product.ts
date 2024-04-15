import {Schema, model} from 'mongoose'

const Product = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    count: {type: Number, required: true}
})

export const GreenTea = model('green_tea', Product)
export const BlackTea = model('black_tea', Product)

export const FruitTea = model('fruit_tea', Product)

export const FlavoredTea = model('flavored_tea', Product)

export const Other = model('other', Product)
