//OOPS can we implement in JS ... YES (not direct)

var events = require('events');
var util = require('util');  //provided utility for inheritance

//Class
var Person = function(name){  
     this.Name = name;        
};

//Inheritance
util.inherits(Person,events.Eventemiiter);

var james = new Person('james');
var mary = new Person('mary');
var mae = new Person('mae');

var peopleArr = [james,mary,mae]; //instead of calling each one put it in array

//publishing event for each object
//sending function to forEach() method since javascript allows that
peopleArr.forEach(function(personEach){
    personEach.on('speak',function(msg){
     console.log(personEach.Name + ' said ' + msg);
  });
});

//triggering even for each object.
james.emit('speak','Hey dude');
mary.emit('speak','Hello');






