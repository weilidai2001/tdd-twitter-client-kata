# TDD-Twitter-Client

This is a server-side webapp that will retreive tweets from CNN

### Demo page
    http://weili-cnn-twitter-client.tk

## Setup

To run the app:

```shell
$ export TWITTER_CONSUMER_KEY=XXX
$ export TWITTER_CONSUMER_SECRET=XXX
$ export TWITTER_TOKEN_KEY=XXX
$ export TWITTER_TOKEN_SECRET=XXX
$ npm install
$ npm start
```

To run integration test:
```shell
$ npm run test:integration
```


```
  Twitter-client-wrapper
    ✓ should retrieve tweets (684ms)


  1 passing (692ms)
```

To run unit test:
```shell
$ npm run test:unit
```

```
  Twitter-parser
    ✓ should parse text-only tweet
    ✓ should parse tweet with picture


  2 passing (12ms)
```

To compile and hot-reload SASS:
```shell
$ npm run watch:sass
```