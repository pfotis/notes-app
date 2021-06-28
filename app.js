const yargs = require('yargs');
const notes = require('./notes.js');

yargs.version('1.1.1');

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
    handler: function(argv) {
        notes.addNotes(argv);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function() {
        notes.removeNotes();
    }
})

yargs.command({
    command: 'list',
    describe: 'List a new note',
    handler: function() {
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a new note',
    handler: function() {
        notes.readNotes();
    }
})

yargs.parse();