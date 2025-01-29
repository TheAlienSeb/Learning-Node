const http = require('http')//http module

const server = http.createServer( (req, res) => { // creates a server with request, and result
    if(req.url === '/'){// .url allows us to specify the outcome when making a request to that url
        return res.end('Welcome to the homepage');
    }
    if(req.url === '/about'){ // same for /about
        return res.end('Our short history'); //.end() returns data on that specific url
    }
    return res.end(`<h1> Oops! </h1> <p> We can't seem to find the page youre looking for </p> <a href="/"> Back Home </a>`) // not in an if statement to return this if it is not a valid url
})

server.listen(5000)