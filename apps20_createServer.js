//creating web server, nodeJS by default switched off every thing
//we have to configure each and every thing from scrath
//eg: creating server, listning to port, IP address
//pickup html file and push it to client, every thing what webserver does

var http=require("http");

var server = http.createServer(function(req,resp){
    //reading client info
    console.log('request was made '+req.url);
    
	//sending data to client with header
	resp.writeHead(200,{'Content-Type':'text/plain'});
	resp.end('Hello World..');

});

server.listen(3000,'127.0.0.1');

console.log('server listneing on 3000');