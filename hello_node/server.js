/**
 * Node getting started
 * https://nodejs.org/en/docs/guides/getting-started-guide/
 *
 * Add header to allow 
 * https://stackoverflow.com/a/54309023
 */
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // Allow all domain requests
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
