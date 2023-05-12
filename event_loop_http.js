const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('welcome to my server')
        return res.end()
    }

    if (req.url === '/about') {
        // for (let i = 0; i < 100000; i++) {
        //     console.log(Math.random())
        // }
        return res.end('about page')
    }

    res.end('not found')
})

server.listen(3000);
console.log('Server listening on port 3000')