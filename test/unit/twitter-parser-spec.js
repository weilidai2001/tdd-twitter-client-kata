'use strict';
const should = require("chai").should();

const twitterParser = require("../../lib/twitter-parser");


describe("Twitter-parser", function () {
  it("should parse tweets", function () {
    const rawTweet = {
      "created_at": "Thu Sep 22 20:33:56 +0000 2016",
      "id": 779056157465993200,
      "id_str": "779056157465993216",
      "text": "US military confirms that shell fired on joint US-Iraqi base Tuesday contained \"a sulfur mustard blister agent.\" https://t.co/XYx9evO4iY",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [],
        "urls": [
          {
            "url": "https://t.co/XYx9evO4iY",
            "expanded_url": "http://cnn.it/2d0t1GQ",
            "display_url": "cnn.it/2d0t1GQ",
            "indices": [
              113,
              136
            ]
          }
        ]
      },
      "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 428333,
        "id_str": "428333",
        "name": "CNN Breaking News",
        "screen_name": "cnnbrk",
        "location": "Everywhere",
        "description": "Breaking news from reporters and editors on the CNN Digital news team. Now 42M strong. Check @cnn for all things CNN, breaking and more.",
        "url": "http://t.co/HjKR4r61U5",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "http://t.co/HjKR4r61U5",
                "expanded_url": "http://cnn.com/",
                "display_url": "cnn.com",
                "indices": [
                  0,
                  22
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 42283425,
        "friends_count": 120,
        "listed_count": 176551,
        "created_at": "Tue Jan 02 01:48:14 +0000 2007",
        "favourites_count": 18,
        "utc_offset": -14400,
        "time_zone": "Eastern Time (US & Canada)",
        "geo_enabled": false,
        "verified": true,
        "statuses_count": 51237,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": true,
        "profile_background_color": "323232",
        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/17349501/CNN_Twitter_Background_05.2009.GIF",
        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/17349501/CNN_Twitter_Background_05.2009.GIF",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/550063386914852865/4JHr5H_Y_normal.jpeg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/550063386914852865/4JHr5H_Y_normal.jpeg",
        "profile_link_color": "004287",
        "profile_sidebar_border_color": "DADADA",
        "profile_sidebar_fill_color": "EEEEEE",
        "profile_text_color": "000000",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 151,
      "favorite_count": 104,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    };
    
    const expected = {
      text: 'US military confirms that shell fired on joint US-Iraqi base Tuesday contained "a sulfur mustard blister agent." '
    };
    
    twitterParser.parseTweet(rawTweet).should.deep.equal(expected);
  });
});