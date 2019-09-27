var counter = function(arr){
	return 'there are '+arr.length+' elements in the array..';
}

var adder = function(a,b){
	return `sum is : ${a+b}`;
}

var pi=3.14;


module.exports = {
	counter:counter,
	adder:adder,
	pi:pi
}