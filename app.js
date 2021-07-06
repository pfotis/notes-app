const yargs = require('yargs');
const notes = require('./notes.js');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demondOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
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
    describe: 'List of notes',
    handler() {
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title);
    }
})

yargs.parse();