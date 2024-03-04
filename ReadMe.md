# APIs-File-Metadata-Microservice-Project
This repository contains my independent problem-solving work, used to produce a full-stack JavaScript application with Node.js and Express.js. This allows the client to to upload a file and receive its metadata from the server. This was my [final project](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/file-metadata-microservice) in freeCodeCamp's Back End Development and APIs curriculum. *The problem-solving approach I used to create this is in its [server.js file](https://github.com/franpanteli/APIs-File-Metadata-Microservice-Project/blob/main/server.js).* This project builds on the [first](https://github.com/franpanteli/APIs-Timestamp-Microservice-Project), [second](https://github.com/franpanteli/APIs-Request-Header-Parser-Microservice-Project), [third](https://github.com/franpanteli/APIs-URL-Shortener-Microservice-Project) and [fourth](https://github.com/franpanteli/APIs-Exercise-Tracker-Fullstack-Project) problems I solved as part of [this course](https://www.freecodecamp.org/learn/back-end-development-and-apis/#mongodb-and-mongoose). Static file serving provided the HTML file for this in the "/public" server directory, and the main project dependencies are detailed below.

## Application Installation & Usage
![Screenshot 2024-03-04 at 16 52 31](https://github.com/franpanteli/APIs-File-Metadata-Microservice-Project/assets/131474705/0ba7491a-10f7-4ef2-807c-329de9ffa450)

[My full notes on how to run the application locally are here](https://github.com/franpanteli/APIs-File-Metadata-Microservice-Project/blob/main/launching-the-app-locally.txt). First, clone this repository with `git clone https://github.com/franpanteli/APIs-File-Metadata-Microservice-Project.git`. 

A test upload file for this application can be [downloaded here](https://github.com/franpanteli/APIs-File-Metadata-Microservice-Project/blob/main/upload-test-file.txt). When this is uploaded to the application, the output of this is `{"name":"upload-test-file.txt","type":"text/plain","size":2606}`. This file is also found in the repository which is cloned to run it, and is called `upload-test-file.txt`. 

## Dependencies

This project has four main dependencies. The first is [express](https://www.npmjs.com/package/express), which was used to build the web application in its [server.js file](https://github.com/franpanteli/APIs-File-Metadata-Microservice-Project/blob/main/server.js). The second dependency is [Cors](https://www.npmjs.com/package/cors), whose middleware was used for security purposes. [Multer](https://www.npmjs.com/package/multer) was thirdly used, to enable the application's file upload functionality. Finally, [Dotenv](https://www.npmjs.com/package/dotenv) was used, provide the option of importing environment variables. 
