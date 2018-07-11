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

  // Interior page
  // app.get("/networking", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/networking.html"));
  // });

  // Style page
  app.get("/style", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/style.html"));
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
