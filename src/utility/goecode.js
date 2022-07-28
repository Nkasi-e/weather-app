const request = require("postman-request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1Ijoibmthc2kiLCJhIjoiY2w1d3R2aXhyMDBpaTNscnphajhnbTFzNyJ9.mJnQQXyj4aw-nFCywP3NaQ&limit=1";
  //usig object destructuring for the body.. check note.js for reference
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback(`Unable to connect to weather services!`, undefined);
    } else if (body.message) {
      callback(`Invalid URL. Check URL and try again`, undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
