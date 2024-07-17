# HTTPServer

Objective:
The goal of this assignment is to set up a basic Node.js server to handle HTTP requests. This will involve processing different routes and responding accordingly, which is a step towards building full-fledged web applications.

Assignment Tasks:

Initialize a New Node.js Project:

Create a new directory for your project and navigate into it.
Use the terminal to run the command that initializes a new Node.js project, generating a package.json file.
Create the Server File:

Create a file named server.js in your project directory.
Set Up the HTTP Server:

Use the http module to create an HTTP server.
Inside the server, set up request handling to:
Respond with a simple HTML page when the root route (/) is accessed.
Respond with a JSON object containing a greeting message when the /api route is accessed.
Include appropriate HTTP status codes and content types for each response.
Ensure that requests to any other route respond with an appropriate error message and status code indicating that the page is not found.
Listen on a Port:

Configure the server to listen on port 3000.
Add a console message that outputs the server's URL when it starts.
Test Your Server:

Run your server and test it by accessing both the root route and the /api route through a web browser or a tool like Postman.
Try accessing an undefined route to ensure that the error message and status code are correctly displayed.
Assignment Submission:

Upload to GitHub and submit the repo link.
