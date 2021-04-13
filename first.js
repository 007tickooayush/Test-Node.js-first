var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    // var user = prompt("Please enter ur name");
    // alert(user);
    res.end('Hello World! ');
}).listen(8080);