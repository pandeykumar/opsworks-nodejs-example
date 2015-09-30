var express = require('express');
var app = express();
var os = require('os');

app.get('/', function(req, res){
  res.send('This is my node.js/express.js app running on host: ' + os.hostname());
});

var port = process.env.NODE_ENV == 'development' ? 3000 : 80;

// start listening
var server = app.listen(port, function() {
  console.log('Node started at ' + app.get('port'));
});


