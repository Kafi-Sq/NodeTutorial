const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./modules/builtInModules/content/first.txt', 'utf-8')
const second = readFileSync('./modules/builtInModules/content/second.txt', 'utf-8')

console.log(first, second)

writeFileSync('./modules/builtInModules/content/resultSync.txt', 
    `Hello World! ${first}, ${second}`,
    {flag: 'a'}
)