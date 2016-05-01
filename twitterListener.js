var Twitter = require('twitter');
var client = new Twitter({
	consumer_key: CONSUMER_KEY_GOES_HERE,
	consumer_secret: CONSUMER_SECRET_GOES_HERE,
	access_token_key: ACCESS_TOKEN_KEY_GOES_HERE,
	access_token_secret: ACCESS_TOKEN_SECRET_GOES_HERE
});

var params = {screen_name: ACCOUNT_SCREENNAME_GOES_HERE};
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
