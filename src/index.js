// Bring in the Express library for use
let express = require('express');

// Use the .env file to hide sensitive information from public access
require("dotenv").config();

// Execute the express library
let app = express();

// Direct this file to refer to the routes file
let routes = require("./routes");

// You have to state you're using json() before stating you're using routes
app.use(express.json());

// Use the routes file
app.use(routes);

// Use the html file for static files
app.use(express.static("./public"));

// First use the PORT in the .env file if one is assigned
// If a PORT is not assined, use PORT 8000
let PORT = process.env.PORT || 8000;

// Provide feedback that the app is up and running and listening on the designated PORT
app.listen(PORT, function(){
    console.log("Application Server started and is listening on PORT ", PORT);
})