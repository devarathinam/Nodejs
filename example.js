const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const http = require('http').createServer(app);


app.use(bodyParser.json()); 
app.use(express.json());

const userList = [
    {
      name : "Deva",
      age : 20,
      id : 1
    },
    {
      name : "Rathinam",
      age : 28,
      id : 2
    }
    
  ]
  
  app.get("/api/user/list", (request, response) => {
    response.status(200).send(userList);
  });

  app.post("/api/user/create", (request, response) => {
    let user = request.body;
    user.id = userList.length + 1;
  
    userList.push(user);
    response.status(200).send({
      message : "Successfully created the user profile"
    })
  });
  
  app.put("/api/user/edit/:id", (request, response) => {
    let id = request.params.id;
    let index = userList.findIndex((value) => {
      return value.id == id;
    });
  
    if(index < 0){
      response.status(401).send({
        message : "Invalid ID number"
      });
      return;
    }
  
    userList[index].name = request.body.name;
    userList[index].age = request.body.age;
    
    response.status(200).send({
      message : "Successfully Updated the user information"
    })
  
  });
  
  
  app.delete("/api/user/delete/:id", (request, response) => {
    let id = request.params.id;
    let index = userList.findIndex((value) => {
      return value.id == id;
    });
  
    if(index < 0){
      response.status(401).send({
        message : "Invalid ID number"
      });
      return;
    }
  
    userList.splice(index, 1);
    response.status(200).send({
      message : "User profile has been deleted successfully"
    })
  });




const port = process.env.PORT || 8080;
http.listen(port, () => {
    console.log("Node JS is running on port 8080")
    
}) 
