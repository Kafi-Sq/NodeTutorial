const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to the Home Page')
    }
    if(req.url === '/about'){
        res.end('Here is the About Page')
    }
    res.end(`
        <h1>404 Page does not exists</h1>
        <p>Server could not find the page you are looking for</p>
        <a href="/">Home</a>
    `)
})

server.listen(3000)