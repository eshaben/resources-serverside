var express = require('express')
var app = express()
var knex = require('./db/knex')
var cors = require('cors')

app.use(cors());

app.get('/resource', function(req, res){
  knex('resource').then(resources => {
    res.json(resources)
  })
});

app.get('/resource/:id', function(req, res){
  let id = req.params.id;
  knex('resource').where('id', id).first()
  .then(resource => {
    res.json(resource)
  })
});

app.listen(process.env.PORT || 8080);
