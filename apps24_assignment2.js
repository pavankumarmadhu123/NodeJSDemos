var http=require('http');
var fs=require('fs');

//once server is created callback function willbe called.
var server = http.createServer(function(req,resp) {
    console.log("request came...")
    resp.writeHead(200,{'Content-Type':'text/plain'});
    var myReadStream=fs.createReadStream(__dirname + '/readme.txt', 'utf8');
    myReadStream.pipe(resp); //pipe automatically ends the channel. so no need of resp.end

});

server.listen(3000,'127.0.0.1')
console.log('listning to 3000 port...');