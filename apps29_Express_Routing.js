var express = require('express');

//express does lot of things
//to get all global access, we need to do this extra step
var app=express(); //intializing the express context obj and holding

app.get('/',function(req,resp){
    resp.send("This is the home Page!");

});
app.get('/contact',function(req,resp){
    resp.send("This is the Contact Page!");

});
app.listen(3000);
console.log("listning to 3000 port.")
