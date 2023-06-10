// http
var http = require('http');
//create a server object:
const server=http.createServer(function (req, res) {
  // respond to the request
  res.writeHead(200,{'content-type':'text/html'})
  res.write('Hello World!');
  res.write('<h1>This is my first server</h1>')
  res.write('<button>Click me i m from server</button>') //write a response
  res.end(); //end the response
})
server.listen(5000, function(){
 console.log("server start at port 3000"); //the server object listens on port 3000
});