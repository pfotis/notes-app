const chalk = require('chalk');


const addNotes = function (argv) {
    console.log(chalk.white.bold.bgBlue(`Title:\n  ${argv.title} \nNote: \n  ${argv.body}`));
}

const removeNotes = function () {
    console.log(chalk.white.italic.bgRed('Removing a new note!'));
}

const listNotes = function () {
    console.log(chalk.white.italic.bgGray('Listing out all notes!'));
}

const readNotes = function () {
    console.log(chalk.white.italic.bgGreen('Reading a note!'));
}

module.exports = {
    addNotes,
    removeNotes,
    listNotes,
    readNotes
};