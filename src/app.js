// Import required modules
const express = require('express');
const path = require('path');
const hbs = require('hbs');

// Database connection
require("./db/conn");

// Import the User model
const User = require("./models/usermessage");

const app = express();

// Set static and template paths
const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");

// Middleware to serve Bootstrap and jQuery from node_modules
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));

// Middleware to parse URL-encoded bodies (from form submissions)
app.use(express.urlencoded({ extended: false }));

// Serve static files (HTML, CSS, JS) from the public directory
app.use(express.static(staticpath));

// Set up the view engine as hbs (Handlebars)
app.set("view engine", "hbs");
app.set("views", templatepath);

// Register partials for hbs (Handlebars)
hbs.registerPartials(partialpath);

// Route for the homepage
app.get("/", (req, res) => {
    res.render("index"); // Render the index.hbs view
});

// Route to handle form submissions on the /contact page
app.post("/contact", async (req, res) => {
    try {
        // Create a new user message from the request body
        const userData = new User(req.body);
        await userData.save(); // Save the data to the database
        res.status(201).render("index"); // Render the index page after successful save
    } catch (error) {
        res.status(500).send(error); // Handle errors
    }
});

// Export the app instance for use in server.js
module.exports = app; // Make sure to export the app
