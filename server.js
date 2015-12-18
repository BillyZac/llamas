var express = require('express');
var knex = require('knex');
var bodyParser = require('body-parser');
var app = express();

// function Llamas(){
//   return knex('llamas');
// }
//
app.use(bodyParser());

app.get('/', function(request, response) {
  response.send('Hello world.')
})

app.get('/llamas', function(request, response, next){
  // Sending the request back to the client.
  response.send(request.body)
})


app.listen(8080)
