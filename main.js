var http = require('http');
function main(){
    console.log('Main function');
}

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    main();
    res.end('main()');
}).listen(8080);