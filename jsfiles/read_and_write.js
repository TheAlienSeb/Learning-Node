const http = require('http')
const fs = require('fs')


http.createServer((req,res) => {
    // const text = fs.readFileSync('./content/first.txt', 'utf8')
    // return res.end(text)

    const fileStream = fs.readFileSync('./content/first.txt')
    fileStream.on('open', () => {
        fileStream.pipe() // pushes read stream into the write stream. It writes the data in chunks to the web server, instead of one big file
    })

    fileStream.on('error', (err) => {
        res.end(err)
    })

}).listen(5000)
