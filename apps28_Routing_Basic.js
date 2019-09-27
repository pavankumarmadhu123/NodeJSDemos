var http=require('http');
var fs=require('fs');

var server = http.createServer(function(req,resp){

console.log("Request was made "+req.url);

if(req.url === '/home' || req.url === '/'){
    resp.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/index.html').pipe(resp);
}
else if(req.url === '/contact'){
    resp.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/contact.html').pipe(resp);
}
else if(req.url === '/api/data'){
    resp.writeHead(200,{'Content-Type':'application/json'});
        var myObj = [
            {
            name:'pavan',
            age:33
            },
            {
            name:'kiran',
            age:25
            }
        ]

    resp.end(JSON.stringify(myObj));
}
else {
    resp.writeHead(404,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/404.html').pipe(resp);
}

});

server.listen(3000,'127.0.0.1');
console.log('server listening on 3000');