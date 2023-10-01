const express = require('express');
const port = 8000;
const app = express();

app.get('/', function(req, res){
    res.send("<h1>Hello World TodoApp Source Tree</h1>");
})

app.listen(port, function(err){
    if(err){
        console.log(`Error while server is up: ${err}`);
        return;
    }
    console.log(`Server is up and running on port: ${port}`);
})