const {readFile, writeFile} = require('fs');

readFile('./content/text.txt', 'utf-8', (err, result) => 
{
    if(err)
    {
        return;
    }
        console.log(result);
})

writeFile('./content/text.txt', `Hello World`, (err, result)=>
{
    if(err)
    {
        return;
    }
    console.log('writed')
})

console.log('done with this task')