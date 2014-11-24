var express = require('express'),
    path = require('path'),
    app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public', 'app.html'));
});

module.exports = app;
