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