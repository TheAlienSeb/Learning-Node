// @ts-nocheck

const {readFile} = require('fs')

readFile('./content/first.txt', 'utf8', (err,res) => {
    if(err){
        return
    } else {
        console.log(res)
    }
})