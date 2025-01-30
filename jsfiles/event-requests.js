const EventEmitter = require('events') // a events class 

const customEmitter = new EventEmitter() // an object of the events class

//interested in 'on' and 'emit'
// on - listen for an event, create an event
//emit - call an event

customEmitter.on('response', (name,id) => { //the event is called response, a type of event
    console.log(`data recieved ${name} with id: ${id}`)
})

// customEmitter.on('response', () => { //there can on functions of the same event, however order matters. For synchronous functions, emit() cannot be before on()
//     console.log(`some other logic here`)
// })

customEmitter.on('response', () => { //the event is called response, we listen for an emit of this event
    console.log(`some other logic here`)
})


customEmitter.emit('response', 'john', 34) // we call the event called response, they must match with the event we created in on()


//HTTP VERSION

const http = require('http')

//using Event Emitter API
 const server = http.createServer()


 //emits a request event
 //we subscribe to the event 'request', we listen for it, and we can respond to it
 server.on('request', (req,res) => { //instead using a callback, we use on()
    res.end('Welcome')
 })