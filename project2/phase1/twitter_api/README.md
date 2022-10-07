# Test
I tested twitter APIs of followers_lookup, get_tweets, liked_tweets, etc. Besides, I used botometer API to check the activity of a Twitter account and give it a score based on to extent to which it matches accounts that use automation. Higher scores indicate activities that are more bot-like. All test codes are written in JavaScript and executed by Node.js. 

# Result
All test results are converted to txt format.

# Twitter API 
Sample code for the Twitter API v2 endpoints.
Individual API features have folders where you can find examples of usage in several coding languages (Java, Node.js, Python, R, and Ruby).

* [Twitter API Documentation](https://developer.twitter.com/en/docs/twitter-api/getting-started/about-twitter-api)

## Prerequisites

* Twitter API Essential Access ([sign up here](https://t.co/signup))
* A Project and an App created [in the dashboard](https://developer.twitter.com/en/portal/dashboard)


## Language-specific requirements


### JavaScript (Node.js) environment set up

You will need to have Node.js installed to run this code. All Node.js examples use `needle` as the HTTP client, which needs to be npm installed. For OAuth with user context requests, you'll need to install the `got` and `oauth-1.0a` packages.

```bash
npm install needle
npm install got
npm install oauth-1.0a
```


## Additional resources

We maintain a [Postman](https://getpostman.com) Collection which you can use for exercising individual API endpoints.

* [Using Postman with the Twitter API](https://developer.twitter.com/en/docs/tutorials/postman-getting-started)
* [Twitter API v2 on the Postman website](https://t.co/twitter-api-postman)

## Support

* For general questions related to the API and features, please use the v2 section of our [developer community forums](https://twittercommunity.com/c/twitter-api/twitter-api-v2/65).

* If there's an bug or issue with the sample code itself, please create a [new issue](https://github.com/twitterdev/Twitter-API-v2-sample-code/issues) here on GitHub.

## Contributing

We welcome pull requests that add meaningful additions to these code samples, particularly for languages that are not yet represented here.

We feel that a welcoming community is important and we ask that you follow Twitter's [Open Source Code of Conduct](https://github.com/twitter/.github/blob/main/code-of-conduct.md) in all interactions with the community.

## License

Copyright 2021 Twitter, Inc.

Licensed under the Apache License, Version 2.0: https://www.apache.org/licenses/LICENSE-2.0
