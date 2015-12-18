var express = require('express');
var knex = require('knex');
var bodyParser = require('body-parser');
var app = express();

function Llamas(){
  return knex('llamas');
}

app.use(bodyParser());

app.get('/llamas',function(req,res,next){
  r
})


app.post('http://localhost:8080/llamas',function(req,res){

})
