# React-app-with-node-backend
Create a React App with a Node Backend
setup Nodejs
Node js setup

•	Create a project folder – 
mkdir demoapp
cd demoapp
•	Initialize npm init 
•	Install required packages nodemon using
nodemon - Nodemon is a tool that automatically restarts your Node. js application when changes are made to the code.
Express - Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.

npm install express nodemon


•	 Package.json file looks like this 


•	{
•	  "name": "demoapp",
•	  "version": "1.0.0",
•	  "description": "",
•	  "main": "app.js",
•	  "scripts": {
•	    "start": "node app.js"
•	  },
•	  "keywords": [],
•	  "author": "",
•	  "license": "ISC",
•	  "dependencies": {
•	    "express": "^4.18.2",
•	    "nodemon": "^3.0.1"
•	  }
•	}
•	





Basic code to host a react app in node, make changes in app.js

 
const express = require("express");
const app = express();
 app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});
 
const PORT = process.env.PORT || 8080;
 
app.listen(PORT, console.log(`Server started on port ${PORT}`));


•	Run using npm start
We can see this output {"message":"Hello from server!"} 
In the below url
http://localhost:8080/api 






