// //regular function
// function sayHi(){
//     console.log("Hi..");
// }

// sayHi();

// //Anonymous function | Function Expression
// var sayBye = function(){
//     console.log("Bye..");
// }

// //sayBye();

// function callMyAPI(strange){
//     strange();
// }

// callMyAPI(sayBye);




//Anonymous function | Function Expression
var sendSMS = function(){
    console.log("sending SMS......");
}


function notifyEmployee(notifyFn){
    notifyFn();
}

notifyEmployee(sendSMS);