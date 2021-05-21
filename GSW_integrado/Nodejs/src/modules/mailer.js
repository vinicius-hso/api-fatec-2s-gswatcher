const path = require('path')
const nodemailer = require('nodemailer')
const { host, port, user, pass } = require('../config/mail.json')
const hbs = require('nodemailer-express-handlebars')

const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass }
  });

  transport.use('compile', hbs({
    viewEngine: 'handlebars',
    //   viewEngine: {
    //       defaultLayout: undefined,
    //       partialsDir: path.resolve('./resources/mail/')
    //     },
      viewPath: path.resolve('./Nodejs/src/resources/mail/'), // resolve parte sempre da raiz absoluta do projeto.
      extName: '.html'
  }))

  module.exports = transport