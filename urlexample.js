var http=require('http');
const url=require('url');

http.createServer(function (req, res) {
   console.log(req.url);
   const urlob=url.parse(req.url)
   console.log(urlob);
}).listen(3000,function () {
      console.log('Server is listening on port 6000');
})
// urlobject looks like this 
// Url {
//       protocol: null,
//       slashes: null,
//       auth: null,
//       host: null,
//       port: null,
//       hostname: null,
//       hash: null,
//       search: null,
//       query: null,
//       pathname: '/amit',
//       path: '/amit',
//       href: '/amit'
//     }