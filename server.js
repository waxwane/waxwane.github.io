var express = require('express');
var path = require('path');

var server = express();
server.use(express.static(path.join(__dirname, '')));

var port = 3000;
server.listen(port, function() {
  console.log('App started on http://localhost:3000');
});
