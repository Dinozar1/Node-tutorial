const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/')
    {
        res.write('home page')
    }
    else if(req.url === '/about')
    {
        res.write('about us')
    }
    else
    {
        res.write(`<h1>Oops!</h1><p>We can't fint page <a href="/">back home</a></p>`)
    }
    res.end()

   
})

server.listen(5000);