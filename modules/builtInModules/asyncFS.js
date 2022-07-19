const { readFile, writeFile } = require('fs')

console.log('Start')
// Call backs and call back hell
readFile('./modules/builtInModules/content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./modules/builtInModules/content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./modules/builtInModules/content/resultAsync.txt',
            `Made this file async: ${first}, ${second}`,
            (err, result) => {
                if(err){
                    console.log(err)
                    return
                }
                console.log('Done')
            }
        )
    })
})
console.log('Starting next')