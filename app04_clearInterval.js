var time=0;

var timer = setInterval(function() {
time+=3;
console.log(time+' seconds have passed');
if(time > 9){
    clearInterval(timer);
}
}, 3000);