'use strict';

module.exports = {
  parseTweet: tweet => {
    const postUrls = tweet.entities.urls ? tweet.entities.urls.map(_ => _.url) : [];
    const mediaUrls = tweet.entities.media ? tweet.entities.media.map(_ => _.url): [];

    let text = tweet.text;
    postUrls.map(url => text = text.replace(url, ""));
    mediaUrls.map(url => text = text.replace(url, ""));

    return {
      text
    }
  }
};