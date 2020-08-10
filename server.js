const http = require("http");
const port = 3000;
const app = require("./app");

// Create the server and listen on the port specified
http.createServer(app).listen(port);

// Inform start
console.log("Started server! Listening on port " + port);