var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    app = express(),

    Mongo = require('mongodb'),
    MongoClient = Mongo.MongoClient,
    DB_URI = 'mongodb://localhost:27017/bq',
    db;

// Connect to the DB.
MongoClient.connect(DB_URI, function(err, connection) {
  if (err) {
    console.log(err);
  }
  else {
    console.log('Connected to DB!');
    db = connection;
  }
});

// Route static assets.
app.use(express.static(path.join(__dirname, '/public')));

// Set up body parsing.
app.use(bodyParser.json());

// Various routes.
app

  .get('/quests', function(req, res) {
    db.collection('quests').find().toArray(function(err, docs) {
      res.send(err || docs);
    });
  })

  .post('/quests', function(req, res) {
    db.collection('quests').save(req.body, function(err, doc) {
      res.send(err || doc);
    });
  })

  // Catch-all redirect to index
  .get('*', function(req, res) {
    res.redirect('/');
  });

module.exports = app;
