// Import the built-in 'http' module
const http = require("http");

// Create a new HTTP server
const server = http.createServer((req, res) => {
  // Check the requested URL
  if (req.url === "/") {
    // Set HTTP status code to 200 OK
    res.statusCode = 200;
    // Set the Content-Type header to text/html
    res.setHeader("Content-Type", "text/html");
    // Send the response body "Welcome to My Home Page" and close the connection
    res.end("<h1>Welcome to My Home Page</h1>");
  } else if (req.url === "/api") {
    // Set HTTP status code to 200 OK
    res.statusCode = 200;
    // Set the Content-Type header to application/json
    res.setHeader("Content-Type", "application/json");
    // Send the response body as a JSON object and close the connection
    res.end(JSON.stringify({ message: "Hello, CTAC!" }));
  } else {
    // Set HTTP status code to 404 Not Found
    res.statusCode = 404;
    // Set the Content-Type header to text/plain
    res.setHeader("Content-Type", "text/plain");
    // Send the response body "404 Not Found" and close the connection
    res.end("404 Not Found");
  }
});

// Define the port number for the server to listen on
const port = 3000;

// Start the server and log a message when it's running
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

/*
The Content-Type header in an HTTP response is used to specify the type of
 content that is being sent in the response body. It helps the client 
 (web browser, application, etc.) understand how to interpret and process the received data.

In the provided Node.js code, the Content-Type header is set using the 
res.setHeader() method. The header is set to either "text/html" or "application/json" based on the requested URL.

If the requested URL is "/", the server sets the Content-Type header to 
"text/html" to indicate that the response body contains HTML content.
If the requested URL is "/api", the server sets the Content-Type header 
to "application/json" to indicate that the response body contains JSON data.*/