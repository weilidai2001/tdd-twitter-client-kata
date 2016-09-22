'use strict';
const should = require("chai").should();
const TwitterClient = require('twitter');

const config = require("../../config");
const TwitterClientWrapper = require("../../lib/twitter-client-wrapper");
const twitterClientWrapper = new TwitterClientWrapper(new TwitterClient(config.twitterAuth), config.twitterTimelineEndpoint);


describe("Twitter-client-wrapper", function () {
  it("should retrieve tweets", function (done) {
    twitterClientWrapper.getTweets(config.twitterHandle, 100).then(tweets => {
      tweets.length.should.be.above(1);
      done();
    });
  });
});