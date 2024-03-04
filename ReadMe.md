# APIs-File-Metadata-Microservice-Project
EDIT THIS:
This repository contains my independent problem-solving work, used to produce a full-stack JavaScript application with Node.js and Express.js. This application allows users to track their exercises and view logs for this. This was my [final project](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/file-metadata-microservice) in freeCodeCamp's Back End Development and APIs curriculum. *The problem-solving approach I used to create this is in its [server.js file](https://github.com/franpanteli/APIs-File-Metadata-Microservice-Project/blob/main/server.js).* This project builds on the [first](https://github.com/franpanteli/APIs-Timestamp-Microservice-Project), [second](https://github.com/franpanteli/APIs-Request-Header-Parser-Microservice-Project), [third](https://github.com/franpanteli/APIs-URL-Shortener-Microservice-Project) and [fourth](https://github.com/franpanteli/APIs-Exercise-Tracker-Fullstack-Project) problems I solved as part of [this course](https://www.freecodecamp.org/learn/back-end-development-and-apis/#mongodb-and-mongoose). This project defined HTTP POST request handlers to add users and their exercises. HTTP GET request handling was implemented to enable clients to retrieve these exercise logs. This retrieval filters these logs within a specified date range, result limit or for a specific user ID in the server memory. Static file serving provided the HTML file for this, and the project dependencies are detailed below.

## Application Installation & Usage
INSERT IMAGE OF APPLICATION

[My full notes on how to run the application locally are here](https://github.com/franpanteli/APIs-File-Metadata-Microservice-Project/blob/main/launching-the-app-locally.txt). First, clone this repository with `git clone https://github.com/franpanteli/APIs-File-Metadata-Microservice-Project.git`.

## Dependencies

This project has two dependencies. The first is [express](https://www.npmjs.com/package/express), which was used to build the web application in its [server.js file](https://github.com/franpanteli/APIs-File-Metadata-Microservice-Project/blob/main/server.js). The second dependency is [Cors](https://www.npmjs.com/package/cors), whose middleware was used for security purposes.
