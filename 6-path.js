const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'example.txt');
console.log(filePath)

console.log(path.basename(filePath))

console.log(path.resolve(__dirname, 'content', 'example.txt'))

console.log(__dirname)

console.log(__filename)