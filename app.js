const yargs = require('yargs');
const chalk=require('chalk');
const notes = require('./notes.js');
const data = process.argv[2];

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'add a new note !',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the add ',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove particular note !',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'listing out notes',
    handler() {
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'reading notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
       notes.readNote(argv.title);
    }
})

yargs.parse();
