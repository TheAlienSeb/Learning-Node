// Node event loops, timers, and vartious operations

const {readFile} = require('fs')
console.log('start')
readFile('./content/first.txt','utf-8', (err,result) => { // a call back
    if (err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed this task')
    
})

console.log('starting next')

//for an event loop, we start all immidiate tasks such as console log, however readFile is asynchronous, 
// so Eventloop will 'offload' it for when I finish all immidiate tasks(synchronus code)
//furthermore, it will only execute the call back when it has finish its job alltogther (when something is returned)
