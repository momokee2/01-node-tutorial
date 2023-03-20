const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Homepage')
    } else if(req.url === '/about'){
        res.end('About');
    } else
    res.end(`
        <p>404</p>
        <a href='/'>back home</a>
    `)    
})

server.listen(5000)

OR

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('HomePage');
});

server.listen(5000, () => {
    console.log('Server running port 5000');
})
