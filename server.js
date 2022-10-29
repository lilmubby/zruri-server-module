var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    fs.readFile("home.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "content-Type": "text/html" });
      res.write(data);
    });
  })
  .listen(4000);
