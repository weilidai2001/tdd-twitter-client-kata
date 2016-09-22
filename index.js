'use strict';

const Q = require('q');
const TwitterClient = require('twitter');

const config = require("./config");

const TwitterClientWrapper = require("./lib/twitter-client-wrapper");
const twitterClientWrapper = new TwitterClientWrapper(new TwitterClient(config.twitterAuth), config.twitterTimelineEndpoint);

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
      const tweets = yield twitterClientWrapper.getTweets(config.twitterHandle, 100);

      res.render('index.html', { tweets });
    });
  });
});