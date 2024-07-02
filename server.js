const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200; // Set HTTP status code to 200 OK
    res.setHeader("Content-Type", "text/html"); // Set the Content-Type header to text/html
    res.end("<h1>Welcome to My Home Page</h1>"); // Send the response body "Welcome to the Home Page" and close the connection
  } else if (req.url === "/api") {
    res.statusCode = 200; // Set HTTP status code to 200 OK
    res.setHeader("Content-Type", "application/json"); // Set the Content-Type header to application/json
    res.end(JSON.stringify({ message: "Hello, CTAC!" })); // Send the response body as a JSON object and close the connection
  } else {
    res.statusCode = 404; // Set HTTP status code to 404 Not Found
    res.setHeader("Content-Type", "text/plain"); // Set the Content-Type header to text/plain
    res.end("404 Not Found"); // Send the response body "404 Not Found" and close the connection
  }
});
                                                               
const port = 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
