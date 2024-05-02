import {t} from "elysia";
import ContactNote from "./models/ContactNote";
import transporter from "./mailTransporter";

export default async function contactHandle(form: note) {
    // save note
    const contactNote = new ContactNote({
        theme: form.theme,
        description: form.description,
        name: form.name,
        lastname: form.lastname,
        phone: form.phone,
        email: form.email
    });
    await contactNote.save();

    // send message for us
    const mailToUs = {
        from: Bun.env.GMAIL_USER,
        to: Bun.env.GMAIL_USER,
        subject: `Новое обращение: ${form.theme}`,
        html: '<div>' +
            `<p style="font-size: 12px">${form.description}</p>` +
            `<p style="font-size: 12px">${form.name}</p>` +
            `<p style="font-size: 12px">${form.lastname}</p>` +
            `<p style="font-size: 12px">${form.phone}</p>` +
            `<p style="font-size: 12px">${form.email}</p>` +
            '</div>'
    }
    transporter.sendMail(mailToUs).catch()

    // send message for client
    const mailToClient = {
        from: Bun.env.GMAIL_USER,
        to: `${form.email}`,
        subject: `Приветствуем, ${form.name}!`,
        html: '<div>' +
            `<h1 style="font-size: 18px">Ваше обращение будет расмотрено в ближайшее время.</h1>` +
            `<p style="font-size: 10px">С уважением, MisterTEA.</p>` +
            `<p style="font-size: 11px">parashchenko.fedor@gmail.com</p>` +
            '</div>'
    }
    transporter.sendMail(mailToClient).catch()

    return 'success'
}

type note = {
    theme: string,
    description: string,
    name: string,
    lastname: string,
    phone: string,
    email: string,
}