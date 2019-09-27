var fs=require('fs');
var os=require('os');

var user = os.userInfo();

fs.appendFile('readme.txt',`Hello ${user.username}`);