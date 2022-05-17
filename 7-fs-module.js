const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/example.txt', 'utf8');

const second = readFileSync('./content/text.txt', 'utf8')

writeFileSync('./content/text.txt', ` here is the result ${first} and ${second}`)

console.log('done with this task')