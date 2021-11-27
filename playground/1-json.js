const fs = require('fs')


// 1. Load and parser the JSON data
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

// 2. CHange the name and age property using your info
data.name = 'Augusto';
data.age = 30;
// 3. Stringify the changed object and overwrite the original data
const person = JSON.stringify(data)
fs.writeFileSync('1-json.json', person)
