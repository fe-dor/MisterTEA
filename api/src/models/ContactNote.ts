import {Schema, model} from 'mongoose'

const ContactNote = new Schema({
    theme: { type: String, required: true },
    description: { type: String, required: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true }
})

export default model('contact_note', ContactNote)
