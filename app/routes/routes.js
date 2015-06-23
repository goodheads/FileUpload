var express = require('express');
var router = express.Router();

var Files = require('../controllers/file');

module.exports = function(router) {

  router.route('/upload')
    .post(Files.uploadImage);
};
