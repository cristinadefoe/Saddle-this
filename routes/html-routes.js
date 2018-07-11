// Dependencies
var path = require("path");

module.exports = function (app) {

  // Homepage
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // About page
  app.get("/about", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

  // Style page
  app.get("/style", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/style.html"));
  });

  // Whimsy page
  app.get("/interior-whimsy", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/interior-whimsy.html"));
  });

  // Gather page
  app.get("/interior-gathering", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/interior-gathering.html"));
  });

  //Sanctuary page
  app.get("/interior-sanctuary", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/interior-sanctuary.html"));
  });

  //Kids page
  app.get("/interior-kids-wing", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/interior-kids-wing.html"));
  });

  //D-Lounge page
  app.get("/interior-d-lounge", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/interior-d-lounge.html"));
  });

  //Escape page
  app.get("/interior-escape-nature", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/interior-escape-nature.html"));
  });

  // Blog page
  app.get("/blog", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });

  // Contact page
  app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

};
