window.onload(function(){
var http = require('http');   
var request = 'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=facababc0c0bee5a781b8212a08c7ba0&units=metric';
var searchBox = document.getElementById('search-box');
var searchButton = document.getElementById('search-button');
var resultBox = document.getElementById('result');

function requestHTTP(){
    http.get(request, function(response){
    return response;
})
}

searchBox.addEventListener('click', function(e){
    if(e.target == searchButton){
        resultBox.innerText = response;
    }
})

})





