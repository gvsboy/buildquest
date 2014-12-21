var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    app = express(),

    Mongo = require('mongodb'),
    MongoClient = Mongo.MongoClient,
    DB_URI = 'mongodb://localhost:27017/bq',

    Router = require('./router'),
    router;

// Route static assets.
app.use(express.static(path.join(__dirname, '/public')));

// Set up body parsing.
app.use(bodyParser.json());


// Connect to the DB and fire up the router.
MongoClient.connect(DB_URI, function(err, connection) {
  if (err) {
    console.log(err);
  }
  else {
    console.log('Connected to DB!');
    router = new Router(app, connection);
  }
});

module.exports = app;
