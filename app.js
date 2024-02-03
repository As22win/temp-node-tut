const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('Welcome to home page'); // Send the response
    } else if (req.url == '/about') {
        res.end('Welcome to about page');
    } else {
        res.end(`
            <h1>OOPS!</h1>
            <p>We cannot find the page</p>
            <a href="/">Back Home</a>
        `);
        
    }
});



server.listen(5000);