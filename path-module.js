const path = require('path')

console.log(path.sep)

const filePath = path.join('/content','subfolder','test.txt')//combines into one path

console.log(filePath)

const base = path.basename(filePath)//gives the last file or folder int the path
console.log(base)


const absolute = path.resolve(__dirname,'content','subfolder','test.txt')//resolves the path into an absolute path
console.log(absolute)