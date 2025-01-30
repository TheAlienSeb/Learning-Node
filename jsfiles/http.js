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

const http = require('http')//http module

const serve2r = http.createServer( (req, res) => { // creates a server with request, and result
    console.log('request event')
    res.end('Hello World')
})
let port = 5000
server.listen(port, () => {
    console.log(`listening on port ${port}`)
})


const http = require('http')


const server4 = http.createServer((req,res) => {
    if(req.url === '/'){
        return res.end('Home Page')
    }
    if(req.url === '/about'){
        //Blocking code
        for( let i = 0; i<1500; i++){
            for(let j = 0; j<1500; j++){
                console.log(`${i} + ${j}`)
            }
        }
        return res.end('About Page')
    }
    return res.end('Error Page')
})

server.listen(5000, () => {
    console.log('server is listening on port 5000')
})