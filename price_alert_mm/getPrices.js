const Nightmare = require('nightmare');
const mm = 'https://www.maxmilhas.com.br/busca-passagens-aereas/OW/BPS/BHZ/2017-10-23/1/0/0/EC';

module.exports = function(result){
const nightmare = Nightmare({ show: false, waitTimeout: 100000});
nightmare

  .goto(mm)

  .wait(10000)

  .evaluate ( () => {
    var prices = document.getElementById('flights_section').querySelectorAll('div > button > div')
    var bestPrices = [];
    for(var i = 0; i < 3; i++){
        bestPrices.push(prices[i].innerText)
    }
    return bestPrices;
 })
 .end()
 .then(result)
 .catch(function (error) {
     console.error('Error:', error);
  }); 
}
