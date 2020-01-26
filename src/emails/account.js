'use strict';

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email, 
    from: 'rizhiy2406@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'rizhiy2406@gmail.com',
    subject: 'Removing account from task manager',
    text: `Hello, ${name}. You've succesfully deleted your account!. What was the reason for this decision?`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
};