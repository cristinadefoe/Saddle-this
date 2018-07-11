// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

// Port will work on local host 8080
var PORT = process.env.PORT || 8080;

// Require all of our models for syncing
var db = require('./models');

// Sets up Expres app
var app = express();

// Standard bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
// Parse application/json
app.use(bodyParser.json());

// Serve static files and assign to public folder so it's available to all documents
app.use(express.static('public'));

// Require html-routes file to server 
require('./routes/html-routes.js')(app);

// Require api-routes file to server (passport authentication)
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
});
