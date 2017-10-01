var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'stt.adm@hotmail.com',
    pass: 'KDP1239a*'
  }
});
var mailOptions = {
  from: '',
  to: '',
  subject: '',
  text: ''
};

module.exports = function(from, to, subject, text){

  mailOptions.from = from;
  mailOptions.to = to;
  mailOptions.subject = subject;
  mailOptions.text = text;

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}