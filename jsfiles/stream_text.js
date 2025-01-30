//streams are used to read and write sequentially
//used for big data
//duplex can read and write data sequentially

//streams extend the event emitters class, we can therefore use events here       


const {createReadStream} = require('fs')

const stream = createReadStream('./content/first.txt', {
    highWaterMark: 9000,
});// creates a stream the reads the file


//by default each buffer will be 64kb
//last buffer in the termnal is the remainder
//highWaterMakr - control the size of the kb buffer






stream.on('data', (result) => { //reads in the data, but reads it in chops
    console.log(result)
})

stream.on('err', (err) => {
    console.log(err)
})
