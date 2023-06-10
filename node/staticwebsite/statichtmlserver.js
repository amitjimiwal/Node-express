// http
const http = require('http');
const url=require('url');
const fs=require('fs');
const server=http.createServer(function (req, res) {
      res.writeHead(200,{'content-type':'text/html'})
//      const path=req.url;
//      if(path==='/about') console.log('Aboutpage')
//      else if(path==='/home') console.log('homepage')
    const urlob=url.parse(req.url);
    const path=urlob.pathname;
    if(path==='/about'){
      const filedata=fs.readFileSync('./about.html',(error,data)=>{
            if(error) console.log(error);
            else console.log(data.toString()); 
            console.log('read done');
         })
         res.write(filedata);
    }
    else if(path==='/home'){
        const filedata=fs.readFileSync('./home.html',(error,data)=>{
            if(error) console.log(error);
            else console.log(data.toString()); 
            console.log('read done');
         })
         res.write(filedata);
    }
    else {
      const filedata=fs.readFileSync('./error.html',(error,data)=>{
            if(error) console.log(error);
            else console.log(data.toString()); 
            console.log('read done');
         })
         res.write(filedata);
    }
})
server.listen(5000, function(){
 console.log("server start at port 3000");
});