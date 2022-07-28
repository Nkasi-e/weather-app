const path = require("path");
const express = require("express");
const hbs = require("hbs");
const forecast = require("../utility/forecast");
const geocode = require("../utility/goecode");

console.log(__dirname);

const app = express();
//Define path for express configuration
const publicDir = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.json());
app.use(express.static(publicDir));

//object name
const name = "Emmanuel Nkasi";

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather Application",
    name,
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About page",
    name,
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help page",
    name,
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Please provide an address",
    });
  }

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }

      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send({ error });
        }
        res.send({
          forecast: forecastData,
          location,
          address: req.query.address,
        });
      });
    }
  );
});

//error page
app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name,
    errorMessage: "Help article not found",
  });
});
app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name,
    errorMessage: "Page not found",
  });
});

//Start server
app.listen(3000, () => {
  console.log("server is up on port 3000");
});
