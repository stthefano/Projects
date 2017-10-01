const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true, width: 1000, height: 600, waitTimeout: 100000});

nightmare



.end()
.then(function (result) {
  console.log(result)
})
.catch(function (error) {
  console.error('Error:', error);
}); 
