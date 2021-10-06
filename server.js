const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const http = require('http').createServer(app);


app.use(bodyParser.json());
app.use(express.json());

const userList = [
    {
      name : "Deva",
      age : 20
    },
    {
      name : "Rathinam",
      age : 28
    },
    {
      name : "John",
      age : 29
    },
  ]
  
  app.get("/api/users", (request, response) => {
    response.status(200).send(userList);
  });




const port = process.env.PORT || 8080;
http.listen(port, () => {
    console.log("Node JS is running on port 8080")
    
}) 