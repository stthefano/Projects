var cron = require('node-cron');
var mailSender = require('./sendMail.js');
var getFlights = require('./getPrices');

var logs = function (request){
    var from = 'stt.adm@hotmail.com';
    var to = 'dadossth@gmail.com';
    var subject = 'Melhores preços de Porto Seguro para BH no momento!';
    var text = `O primeiro melhor preço é: ${request[0]}O segundo melhor preço é: ${request[1]}O terceiro melhor preço é: ${request[2]}`

    mailSender(from, to, subject, text);
}


var getPrices = cron.schedule('*/30 * * * * *', function(){
    getFlights(logs);
    console.log('Cron Running');
}, false);

getPrices.start();