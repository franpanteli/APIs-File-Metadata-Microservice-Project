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

/*
	The` .get` route handler:
		HTTP GET requests:
			-> This block of code sets up an HTTP GET request handler 
			-> This 'gets' information from the server, which it sends back to the client 
			-> The first argument of this is the path on the server where the information we want to send back to the 
          client is 
				-> In this case, this is located at the root path of the server 
			-> The second argument is its callback function -> the arguments of this are the request (`req`) and response 
          (`res`) objects 
				-> These are respectively sent from the client to the server and from the server to the client

		The callback function: 
			-> This is triggered when the client makes an HTTP GET request to the server 
			-> This function is the second argument in this use of the `get` method and is defined in the indented code 
          in the block
			-> In its response (`res`) object, we send the project index.html file back to the client 
			-> The argument of the `sendFile` method we use to do this is the path of the html file on the server <- `cwd`, 
        current working directory 

	-> This route handler is for static file serving 
	-> When the client makes an HTTP GET request to the server, the server sends it back the project index.html file which 
      it stores 
	-> This is static file serving -> and this route handler tells the server which directory the file we want to serve is 
      located at
*/

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});





















app.post("/api/fileanalyse", multer().single("upfile"), function (req, res) {
  const { originalname, mimetype, size } = req.file;
  return res.json({ name: originalname, type: mimetype, size });
});











/*
	Telling the application to listen to a port:
		-> `app` is the name of the variable which stores this instance of the Express application
		-> This project is intended to be run locally
		-> This block of code uses the .listen method
		-> This tells the server which port to listen to
		-> This port number is set in the variable before the .listen method is used  

		The arguments of this are:
			The port number that the application will use: 
				-> The value of this is stored in the `port` variable
				-> The value of this is set at the beginning in this block of code
				-> Since this port number is sensitive information, this file imports its value from an external .env (environment) file 
				-> If this file is non-existent, then we use pipe symbols (`||`) to set its value to 8080  

			The callback function which we want to execute when the server starts listening to the port: 
				-> We use the .log method here, to write a message in the terminal
				-> This includes the value of the `PORT` variable, which the server listens to

	There are two stages when the client connects to the server: 
		-> The client makes requests to the port, by accessing its associated URL  
		-> The server can access that same port, by 'listening' to it 
		-> When the client makes a request to the port via accessing its URL, a request object is sent to the server
		-> The server then implements route handling and sends back an appropriate response object to the client, via the port 

		For this exchange to happen:
			-> The server must listen to the port <- this is what this section of code does, and we will know that the server is listening 
				to the port once the console logs the message which is set here 
			-> The client must access the port via a URL 
			-> That URL is specific to the port 	
			-> The client must make a request -> in this case, by accessing the microservice at that URL 
			-> The server must have the correct middleware, depending on the contents of the request object 

	-> We are telling the server to listen for connections made to that port 
	-> We are also defining the port number which sets the URL the client accesses the application from 
*/

const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});