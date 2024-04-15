import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: Bun.env.GMAIL_USER,
        pass: Bun.env.GMAIL_PASS
    }
});

export default transporter