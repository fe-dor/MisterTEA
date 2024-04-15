import {Schema, model} from 'mongoose'

const Admin = new Schema({
    login: {type: String, required: true},
    password: {type: String, required: true},
})

export default model('admin', Admin)
