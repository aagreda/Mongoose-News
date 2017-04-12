// Require Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require("path");

// Our scraping tools
var request = require("request");
var cheerio = require("cheerio");
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Initialize Express
var app = express();
var PORT = process.env.Port || 3000; 

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use (bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));


// Make public a static dir
app.use(express.static("public"));


// Routes
// ======

// A GET request to scrape the echojs website



// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});