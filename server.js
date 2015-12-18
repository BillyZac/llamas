var express = require('express');
var knex = require('knex');
var bodyParser = require('body-parser');
var app = express();

function Llamas(){
  return knex('llamas');
}

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(request, response) {
  response.send('Hello world.')
})

app.get('/llamas', function(request, response, next){
  Llamas().select()
    .then(function (llamas) {
      response.json(llamas);
    })
    .catch(function (err) {
      response.json(err);
    });
})

app.listen(8080)
