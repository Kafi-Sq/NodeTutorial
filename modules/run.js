// CommonJs, every file is a module by default
// Modules - Encapsulated Code 
const names = require('../modules/names')
const sayHi = require('../modules/utils')
const data = require('../modules/alternative')
require('../modules/noExport')
console.log(data)

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)