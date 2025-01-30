const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

console.log(first,second)


//synchronus approch
writeFileSync('./content/result-sync.txt',`This is the result of writeFileSync: ${first}, ${second}`, {flag: 'a'}) 
//{flag : 'a'}, flag is an object and a is a status that means 'append', it therefore appends new values to the result-sync.txt


console.log("Done")
console.log('starting next')