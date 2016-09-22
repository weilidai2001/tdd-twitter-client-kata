'use strict';

const Q = require('q');
const config = require("./config");
const nunjucks = require('nunjucks');
const express = require("express");
const app = express();
app.use(express.static('public'));

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

var server = app.listen(config.port, function () {
  console.log(`App server started on port ${config.port}`);

  app.get('/', function(req, res) {
    Q.spawn(function* (){
      res.render('index.html');
    });
  });
});