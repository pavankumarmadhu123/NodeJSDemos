//How to leverage Dual,Octa core processor
//Parallel Programming
//Asynchronous call - Node creates multiple threads
//Callback function -> Used in Asynchrous calls
//NodeJS -> every thing is Asynchronous call 
//(eg: setTimeOut,setInterval,forEach...) thats y most of the methods has call back func


var fs=require('fs');

var readme = fs.readFileSync('readme.txt','utf8');

console.log(readme);


