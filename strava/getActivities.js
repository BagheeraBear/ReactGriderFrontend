
// get / athlete / activities

var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "YOUR ACCESS TOKEN"

var api = new StravaApiV3.ActivitiesApi()

var opts = { 
  'before': 56, // {Integer} An epoch timestamp to use for filtering activities that have taken place before a certain time.
  'after': 56, // {Integer} An epoch timestamp to use for filtering activities that have taken place after a certain time.
  'page': 56, // {Integer} Page number.
  'perPage': 56 // {Integer} Number of items per page. Defaults to 30.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getLoggedInAthleteActivities(opts, callback);