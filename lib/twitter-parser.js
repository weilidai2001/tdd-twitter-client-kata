'use strict';

module.exports = {
  parseTweet: tweet => {
    const postUrls = tweet.entities.urls ? tweet.entities.urls.map(_ => _.url) : [];
    const mediaUrls = tweet.entities.media ? tweet.entities.media.map(_ => _.url): [];

    let text = tweet.text;
    postUrls.forEach(url => text = text.replace(url, "")); // Remove postUrl fragments
    mediaUrls.forEach(url => text = text.replace(url, "")); // Remove postMedia Urls

    return {
      text,
      profileImageUrl: tweet.user.profile_image_url
    }
  }
};