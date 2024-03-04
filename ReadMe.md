# APIs-File-Metadata-Microservice-Project
This repository contains my independent problem-solving work, used to produce a full-stack JavaScript application with Node.js and Express.js. This project builds on the [first](https://github.com/franpanteli/APIs-Timestamp-Microservice-Project), [second](https://github.com/franpanteli/APIs-Request-Header-Parser-Microservice-Project), [third](https://github.com/franpanteli/APIs-URL-Shortener-Microservice-Project) and [fourth](https://github.com/franpanteli/APIs-Exercise-Tracker-Fullstack-Project) problems I solved as part of freeCodeCamp's [Back End Development and APIs curriculum](https://www.freecodecamp.org/learn/back-end-development-and-apis/#mongodb-and-mongoose). This was my [final project](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/file-metadata-microservice) in this course. This application runs locally and allows the client to upload a file and receive its metadata from the server.  *The problem-solving approach I used to create this is provided in depth in its [server.js file](https://github.com/franpanteli/APIs-File-Metadata-Microservice-Project/blob/main/server.js).*  Static file serving was implemented to provide the HTML file for this and the main project dependencies are detailed below.

## Application Installation & Usage
![Screenshot 2024-03-04 at 16 52 31](https://github.com/franpanteli/APIs-File-Metadata-Microservice-Project/assets/131474705/0ba7491a-10f7-4ef2-807c-329de9ffa450)

[My full notes on how to run the application locally are here](https://github.com/franpanteli/APIs-File-Metadata-Microservice-Project/blob/main/launching-the-app-locally.txt). First, clone this repository with `git clone https://github.com/franpanteli/APIs-File-Metadata-Microservice-Project.git`. 

A test upload file for this application can be [downloaded here](https://github.com/franpanteli/APIs-File-Metadata-Microservice-Project/blob/main/upload-test-file.txt). This file ('upload-test-file.txt') is also found in this repository. When this is uploaded to the application, its output is `{"name":"upload-test-file.txt","type":"text/plain","size":2606}`. 

## Dependencies

This project has four main dependencies. The first is [express](https://www.npmjs.com/package/express), which was used to build the web application in its [server.js file](https://github.com/franpanteli/APIs-File-Metadata-Microservice-Project/blob/main/server.js). The second dependency is [Cors](https://www.npmjs.com/package/cors), whose middleware was used for security purposes. The application thirdly used [Multer](https://www.npmjs.com/package/multer), to enable its file upload functionality. [Dotenv](https://www.npmjs.com/package/dotenv) was finally used, to provide the option of importing environment variables. 