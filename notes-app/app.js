const chalk = require('chalk')
const notes = require('./notes')




const message = notes()
console.log(message);


const chalkMsg = chalk.green.inverse.bold('Success!')
console.log(chalkMsg);

