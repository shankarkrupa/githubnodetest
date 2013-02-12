var http = require("http");

http.createServer(function(req,response)
{
 response.writeHead(200, {"content-type":"text/html"}) ;
 response.write("vanakkam");
 response.end();
}
).listen(process.env.PORT, process.env.IP);
