const http = require("http");

const server = http.createServer((req, resp) => {
  if (req.url === "/home") {
    resp.end("Home Page....");
  } else if (req.url === "/about") {
    resp.end("About...");
  } else {
    resp.end("Error...");
  }
});

server.listen(3000, () => {
  console.log("Running");
});