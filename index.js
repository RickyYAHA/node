var http = require("http");

console.log("startuje serwer...");

http.createServer(function(request, response){
    //tu jest funkcja createServer
    //request = żądanie wysyłane z przeglądarki
    //response = to co wysyłamy do przeglądarki w odpowiedzi 
    response.writeHead(418, {'Content-Type': 'text/html'});
    response.write("Hello world!");
    response.end();

}).listen(8080);