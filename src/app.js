const config = require('./config');
const nodemailer = require('nodemailer');

// Creamos el objeto de transporte
const transporter = nodemailer.createTransport({
    service: config['SERVICE'],
    auth: {
        user: config['USERNAME'],
        pass: config['PASSWORD']
    }
});

const mailOptions = {
    from: config['FROM'],
    to: config['TO'],
    subject: config['SUBJECT'],
    text: config['MESSAGE']
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email enviado: ' + info.response);
    }
});