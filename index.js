var express = require('express');
var app = express();

const { MongoClient } = require('mongodb');

var routes = require('./routes.js');

app.use('/routes', routes);

// var things = require('./things.js');

// app.use('/things', things);

var binding = require('./url_binding.js');

app.use('/binding', binding);

let PORT = process.env.PORT || 3000;

app.get('*', function (req, res) {
    res.send('Sorry, this is an invalid URL.');
});

const uri = "mongodb+srv://nyasha_mongo:Tonderayi@1994@cluster0.vnxt1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {

    if (err) return console.error(err)
    console.log('Connected to Database')

  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.listen(PORT, ()=>{
    console.log("Server is listening on port: " + PORT);
});