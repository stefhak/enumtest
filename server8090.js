var fs = require("fs");
var http = require("http");

var port = 8090;

var server = http.createServer(function (request, response) {
    var parts = request.url.split("/");
    switch (parts[1]) {
        case "":  // client code delivery
            fs.readFile("index.html", function (error, content) {
                if (error) {
                    response.writeHead(404);
                    response.end();
                    return;
                }
                response.writeHead(200, {"Content-Type": "text/html"});
                response.end(content);
            });
            break;
    }
/*    var headers = {
        "Server-Timing": "miss, db=53, app=47.2",
        "Pragma": "no-cache",
        "Expires": "0"
    };

    var parts = request.url.split("/");
    response.writeHead(200, headers);
    response.end('It Works!! Path Hit: ' + request.url);*/
});

server.listen(port);