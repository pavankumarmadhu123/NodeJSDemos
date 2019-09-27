var express = require('express');

//express does lot of things
//to get all global access, we need to do this extra step
var app=express(); //intializing the express context obj and holding
app.set('view engine','ejs'); //i need to tell express to set ejs as view engine

//EJS does not do all static files, so we need to configure middle ware to do
app.use('/assets',express.static('assets'));//configuring middle ware to handle /assets static things

app.get('/',function(req,resp){
    resp.render('index');

});
app.get('/contact',function(req,resp){
    console.log(req.query);
    resp.render('contact',{qs: req.query});

});
app.get('/contactform',function(req,resp){
    console.log(req.query);
    resp.render('contactForm',{qs: req.query});

});
app.get('/profile/:name',function(req,resp){
    //In case of webservice call, we get steam of data as array
    var data = {age:29, job:'Dev', hobbies: ['eating','sleeping','reading']};
    //resp.render -> used to render EJS files
    //resp.render('profile'); //it checkes in /views folder 'profile.ejs'
    resp.render('profile',{person: req.params.name, 'data':data}); //passing name to profile.ejs file

});
app.get('/**',function(req,resp){
    resp.send("Page not found 404 Error ");

});
app.listen(3000);
console.log("listning to 3000 port.")
