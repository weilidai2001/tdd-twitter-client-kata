const twitterParser = require('./twitter-parser');

module.exports = function (twitterClient, twitterEndpoint) {
  this.getTweets = function (screenName, count) {
    count = count || 10;
    return new Promise(resolve => {
      twitterClient.get(
        twitterEndpoint,
        {
          "screen_name": screenName,
          "count": count,
          "include_rts": false,
          exclude_replies: true
        },
        function (err, body) {
          resolve(body.map(twitterParser.parseTweet));
        }
      );
    });
  }
};