const http = require('http')


const server = http.createServer((req, res) => {
    req.url === '/'
    res.end('home page')
})

server.listen(5000, () => {
    console.log('Server running port 5000');
})
