var express = require('express')
var app = express()
var knex = require('./db/knex')
var cors = require('cors')
var bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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

app.post('/resource', (req, res) => {
	let post = req.body;
	knex('resource').insert(post)
		.returning('*')
		.then(resource => {
			res.json({
        resource: resource,
        message: "success"
	    });
    })
})

app.delete('/resource/:id', (req, res) => {
  console.log(req.params.id);
  knex('resource').where('id', req.params.id).del()
  .then(function (){
    res.json({message: "success"})
  })
})

app.listen(process.env.PORT || 8080);
