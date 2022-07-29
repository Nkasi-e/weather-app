const request = require("postman-request");

const forecast = (latitute, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=a3c12fdfa9c1fdd3011e3c89ba8fddf2&query=" +
    latitute +
    "," +
    longitude +
    "&units=m";
  //usig object destructuring for the body.. check note.js for reference
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather", undefined);
    } else if (body.error) {
      callback("URL not valid. Check URL", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degree,
        It also has the pressue of ${body.current.pressure}, and a humidity of ${body.current.humidity}, having a UV index of ${body.current.uv_index}`
      );
    }
  });
};

module.exports = forecast;
