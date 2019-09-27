var http=require('http');
var fs=require('fs');

//once server is created callback function willbe called.
var server = http.createServer(function(req,resp) {
    console.log("request came...")
    resp.writeHead(200,{'Content-Type':'application/json'});

    var myObj = {
        name:'pavan',
        id:100,
        email:'pavan@g.c'
    }

    resp.end(JSON.stringify(myObj));

});

server.listen(3000,'127.0.0.1')
console.log('listning to 3000 port...');