var http=require('http');
var fs=require('fs');

//once server is created callback function willbe called.
var server = http.createServer(function(req,resp) {
    console.log("request came...")
    resp.writeHead(200,{'Content-Type':'text/html'});

    //here we readResponse and push to resp -> as chunks -> Buffers(Stream)
    //other web servers(jbosss,tomcat) -> they directly push file to resp -> performance is slow
    var myReadStream=fs.createReadStream(__dirname + '/index.html','utf8');
    myReadStream.pipe(resp); //pipe automatically ends the channel. so no need of resp.end

});

server.listen(3000,'127.0.0.1')
console.log('listning to 3000 port...');
