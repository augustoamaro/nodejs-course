const chalk = require('chalk');
const { argv } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes')

// Customizar versão do yargs
yargs.version('1.1.0')

// Criação do comando Add
yargs.command({
    command: 'add',
    describe: 'Adicionar uma nova nota',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string' 
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Criação do comando Remove
yargs.command({
    command: 'remove',
    describe: 'Remove uma nova nota',
    handler: function () {
        console.log(`Title: ${argv.title}`)
    }
})


// Criação do comando Read
yargs.command({
    command: 'read',
    describe: 'Ler uma nova nota',
    handler: function () {
        console.log('Lendo uma nova nota');
    }
})

// Criação do comando List
yargs.command({
    command: 'list',
    describe: 'Listar todas as notas',
    handler: function () {
        console.log('Listando todas as notas');
    }
})

console.log(yargs.argv);

