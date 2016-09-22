'use strict';
const should = require("chai").should();
const TwitterClient = require('twitter');

const config = require("../../config");
const TwitterClientWrapper = require("../../lib/twitter-client-wrapper");
const twitterUrl = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
const cnnTweetHandle = 'cnnbrk';
const twitterClientWrapper = new TwitterClientWrapper(new TwitterClient(config.twitter), twitterUrl);


describe("Twitter-client-wrapper", function () {
  it("should retrieve tweets", function (done) {
    twitterClientWrapper.getTweets(cnnTweetHandle).then(tweets => {
      tweets.length.should.be.above(1);
      done();
    });
  });
});