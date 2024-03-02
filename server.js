/*
	About this block of code:
		-> This block of JavaScript defines 5 variables
		-> These import modules and initialise an instance of the Express application 
		-> The `require` method is used to import modules into the JavaScript file
		-> These modules are defined with this method and set equal to a variable (`var`)

	Importing the `Express` and `Cors` modules:	
		-> The first two variables import the Express and Cors modules 
		-> The first variable contains the entire Express module. This does not initialise an instance of an Express 
      application, it just imports this module
		-> CORS <- Cross-Origin Resource Sharing -> this is for security 
			-> We limit the number of domains to which the project webpage can make requests  

	Load environment variables:
		-> You can add a sample.env file to the root of the project
		-> This file is full of variables which store sensitive information, and are imported into the main project 
      JavaScript file 
		-> This is done by using the `dotenv` module 
		-> The method which is used to import these variables is `config()`

	Import the `multer` module:
		-> The application we are making handles the metadata for files which the client uploads 
		-> This module contains middleware functions for handling this 
			-> Specifically, file / form uploads 

	Defining the instance of the express application:
		-> The final variable we define is `app`
		-> This defines the instance of the Express application for the project
		-> So when, for example, app.method is used <- this represents a method being used on the express application 
      for the project (`app` is the name of the variable which stores this instance of the project application)	
*/

var express = require("express");
var cors = require("cors");
require("dotenv").config();
const multer = require("multer");
var app = express();

/*
	About this block of code:
		-> `use` is the method which is used to setup middleware
			-> This takes the `req` request object which the client sends to the server, and the `res` response object 
        which the server sends back 
		-> This block contains two uses of this method 
		-> The first sets up middleware from the `cors` module <- this is middleware for security 
		-> The second sets up middleware for static file serving 
	
	Middleware for static file serving:
		-> There are files stored on the server, for instance the project index.html file 
		-> Static file serving is when the server sends the client one of these static files 
		-> The middleware which is required for this is in the express.static function 
		-> The argument for this method is the location on the server where the files we want it to serve are <- `cwd`
       (current working directory)
		-> The first argument of the .use function for this case is the directory on the server where these files that
      we want served are 
*/

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));











app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});










app.post("/api/fileanalyse", multer().single("upfile"), function (req, res) {
  const { originalname, mimetype, size } = req.file;
  return res.json({ name: originalname, type: mimetype, size });
});












const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});