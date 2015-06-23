require('dotenv').load();

var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 4000,
  routes = require('./app/routes'),
  router = express.Router(),
  methodOverride = require('method-override'),
  morgan = require('morgan'),
  multer = require('multer'),
  path = require('path');

app.use(morgan('dev'));
app.use(multer({
  dest: './uploads/'
}));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use(methodOverride());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization, x-access-token');
  next();
});

app.use('/api', router);
routes(router);

app.listen(port);
console.log('Magic happens on port ' + port);
