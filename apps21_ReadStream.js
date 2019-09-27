var http=require('http');
var fs=require('fs');

var myReadStream=fs.createReadStream(__dirname + '/bigFile.txt');
//var myReadStream=fs.createReadStream(__dirname + '/bigFile.txt', 'utf8');  //given utf8 to read in utf8 format and display

//read file into the stream
//split the data into chunks and load it to the stream
//The data returned from the stream implicitrly inherits from EventEmitter class

//subscribe to the 'data' event
myReadStream.on('data', function(chunk){
    console.log('new chunk received');
    console.log(chunk);
});