var http=require('http');
var fs=require('fs');


var myReadStream=fs.createReadStream(__dirname + '/bigFile.txt', 'utf8');  //given utf8 to read in utf8 format and display

var myWriteStream=fs.createWriteStream(__dirname + '/bigWriteFile2.txt');

//no need of event, pipe automatically pushes - and good performance
//event damages the perforamnce by raising event.
myReadStream.pipe(myWriteStream);