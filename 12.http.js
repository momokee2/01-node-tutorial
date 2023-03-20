const http = require('http')


const server = http.createServer((req, res) => {
    // console.log('user hit the server') or
    req.url === '/'
    res.end('home page')
})

server.listen(5000, () => {
    console.log('Server running port 5000');
})
