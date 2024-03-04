# APIs-File-Metadata-Microservice-Project
EDIT THIS:
This repository contains my independent problem-solving work, used to produce a full-stack JavaScript application with Node.js and Express.js. This application allows users to upload files and view the metadata of these files. This was my [final project](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/file-metadata-microservice) in freeCodeCamp's Back End Development and APIs curriculum. *The problem-solving approach I used to create this is in its [server.js file](https://github.com/franpanteli/APIs-File-Metadata-Microservice-Project/blob/main/server.js).* This project builds on the [first](https://github.com/franpanteli/APIs-Timestamp-Microservice-Project), [second](https://github.com/franpanteli/APIs-Request-Header-Parser-Microservice-Project), [third](https://github.com/franpanteli/APIs-URL-Shortener-Microservice-Project) and [fourth](https://github.com/franpanteli/APIs-Exercise-Tracker-Fullstack-Project) problems I solved as part of [this course](https://www.freecodecamp.org/learn/back-end-development-and-apis/#mongodb-and-mongoose). 



This project defined HTTP POST request handlers to add users and their exercises. HTTP GET request handling was implemented to enable clients to retrieve these exercise logs. This retrieval filters these logs within a specified date range, result limit or for a specific user ID in the server memory. 



The application leverages the Multer middleware for efficient and flexible handling of file uploads, allowing the server to process and extract detailed metadata seamlessly. The integration of the CORS middleware ensures a secure implementation of Cross-Origin Resource Sharing, meticulously restricting domain access to enhance the overall security posture of the application. To manage sensitive information, the dotenv module is employed, enabling the dynamic loading of environment variables from an external configuration file. A critical aspect of the project involves static file serving, where the server is configured to efficiently serve static assets from the designated "/public" directory, optimizing performance and user experience. This implementation adheres to modern web development practices, emphasizing modularity, security, and scalability. The user interface facilitates seamless interaction, enabling users to upload files and receive detailed metadata analysis promptly. This technical overview underscores the utilization of middleware, security measures, and dynamic configurations, showcasing a comprehensive and technically sound solution for the efficient handling of file metadata.




Static file serving provided the HTML file for this, and the project dependencies are detailed below.






## Application Installation & Usage
![Screenshot 2024-03-04 at 16 52 31](https://github.com/franpanteli/APIs-File-Metadata-Microservice-Project/assets/131474705/0ba7491a-10f7-4ef2-807c-329de9ffa450)

[My full notes on how to run the application locally are here](https://github.com/franpanteli/APIs-File-Metadata-Microservice-Project/blob/main/launching-the-app-locally.txt). First, clone this repository with `git clone https://github.com/franpanteli/APIs-File-Metadata-Microservice-Project.git`. 

A test upload file for this application can be [downloaded here](https://github.com/franpanteli/APIs-File-Metadata-Microservice-Project/blob/main/upload-test-file.txt). When this is uploaded to the application, the output of this is `{"name":"upload-test-file.txt","type":"text/plain","size":2606}`. This file is also found in the repository which is cloned to run it, and is called `upload-test-file.txt`. 

## Dependencies

This project has three main dependencies. The first is [express](https://www.npmjs.com/package/express), which was used to build the web application in its [server.js file](https://github.com/franpanteli/APIs-File-Metadata-Microservice-Project/blob/main/server.js). The second dependency is [Cors](https://www.npmjs.com/package/cors), whose middleware was used for security purposes. [Multer](https://www.npmjs.com/package/multer) was thirdly used, to enable the application's file upload functionality.
