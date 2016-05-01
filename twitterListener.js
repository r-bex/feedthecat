var Twitter = require('twitter');
var credentials = require('./credentials.json')

var client = new Twitter({
	consumer_key: credentials.consumer_key,
	consumer_secret: credentials.consumer_secret,
	access_token_key: credentials.access_token_key,
	access_token_secret: credentials.access_token_secret
});

var params = {screen_name: credentials.screen_name};
client.get('statuses/user_timeline', params, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    var lastTweet = data[0];
    console.log('Last tweet received at ' + lastTweet.created_at);
    console.log('Last tweet content: ' + lastTweet.text);
    var tweetTime = Date.parse(lastTweet.created_at);
    var now = new Date();
    var timeDiff = now.getTime() - tweetTime;
    var tenMins = 10 * 60 * 1000;
    if (timeDiff <= tenMins) {
      console.log('Less than ten mins since tweet -> feed the cat');
    } else {
      console.log('Last tweet is older than 10 mins -> no feeding');
    }
  }
});
