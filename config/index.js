module.exports = {
  port: 3000,
  twitterAuth: {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  },
  twitterTimelineEndpoint: "https://api.twitter.com/1.1/statuses/user_timeline.json",
  twitterHandle: "cnnbrk"
};