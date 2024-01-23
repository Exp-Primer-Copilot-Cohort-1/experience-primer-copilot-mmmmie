// Create web server
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// Set up template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Set up static files
app.use(express.static("public"));

// Use body-parser
app.use(express.urlencoded({ extended: false }));

// Set up router
const router = require("./routes/index");
app.use("/", router);

// Listen to port 3000
app.listen(port, () => console.log(`Server is running on port ${port}`));