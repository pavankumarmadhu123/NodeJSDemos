var events = require('events');


var myEmitter = new events.EventEmitter();

//publish event
//Why we need annonymous fun() -> tightly couppled with this event, bez no one will use this
myEmitter.on('someEvent',function(msg){
   console.log(msg);

});


//trigger the event
//since there is no UI here, we have trigger
myEmitter.emit('someEvent','The event was emitted');