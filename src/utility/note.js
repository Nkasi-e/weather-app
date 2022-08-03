/*const url =
  "http://api.weatherstack.com/current?access_key=a3c12fdfa9c1fdd3011e3c89ba8fddf2&query=37.8267,-122.4233&units=m";
//fetching data with postman-request package
request({ url, json: true }, (error, response) => {
  if (error) {
    console.log(`Unable to cconnect to weather API service`);
  } else if (response.body.error) {
    console.log(`Unable to find location`);
  } else {
    console.log(
      `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degree out`
    );
  }
  //   const data = JSON.parse(response.body); //JSON.parse() to convert JSON data to an object
  //   console.log(data.current); //the current attribute contains current data forecast information
  // console.log(response.body.current); //this is because the json object is being set to true, so it automatically parse() the JSON data to object
});

const geocodeUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoibmthc2kiLCJhIjoiY2w1d3R2aXhyMDBpaTNscnphajhnbTFzNyJ9.mJnQQXyj4aw-nFCywP3NaQ&limit=2";

request({ url: geocodeUrl, json: true }, (error, response) => {
  if (error) {
    //Low level error
    console.log(`Unable to connect to mapbox! check your network connection`);
  } else if (response.body.message) {
    //Input error
    console.log(`Unable to fetch url data! Check url and try again`);
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(`${latitude}, ${longitude}`);
  }
});*/
