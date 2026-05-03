const http = require('http');

http.createServer((req, res) => {
    res.end('HELLO');
}).listen(5000, () => console.log('running'));