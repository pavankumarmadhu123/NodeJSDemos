var fs= require('fs');
fs.mkdir('Data',function(){
     fs.writeFile('./Data/Finance.txt','Hello World',function(){
          fs.readFile('./Data/Finance.txt','utf8',function(err,data){
                   fs.mkdir('Banking',function(){ });
                   fs.writeFile('./Banking/Accounts.txt',data,function(){
                         fs.unlink('./Data/Finance.txt',function(){
                            fs.rmdir('Data');
                         });
                   });
          });
     });
});
