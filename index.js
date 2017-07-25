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

app.listen(8080);
