var express = require('express');

var binding = express();

binding.get('/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});

binding.get('/things/:name/:id', function(req, res) {
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
 });

 binding.get('/regex/:id([0-9]{5})', function(req, res){
    res.send('id: ' + req.params.id);
 });

module.exports = binding;