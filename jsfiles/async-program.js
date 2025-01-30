
// const getText = (path) => {
//     return new Promise((resolve,reject) => { //creating a promise
//         readFile(path, 'utf8', (err,res) => {
//             if(err){
//                 reject(err)
//             } else {
//                 resolve(res)
//             }
//         })
//     })
// }

// getText('./content/first.txt') //calling getText
// .then(result => {console.log((result))})//chaining to console.log after we get the result from get text
// .catch((err) => {console.log(err)}) //catching any errors


// const util = require('util')
// const ReadFilePromise = util.promisify(readFile) // the one line version of the function we wrote before using util
// const WriteFilePromise = util.promisify(writeFile)

const {readFile, writeFile} = require('fs').promises

const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result-mind-grenade.txt', `This is awesome: ${first} ${second}`, {flag : 'a'})
        console.log(first,second)
    } catch(error) {
        console.log(error)
    }
}

start()
