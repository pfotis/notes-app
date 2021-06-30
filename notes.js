const fs = require('fs');
const chalk = require('chalk')
const { Console } = require('console');

const addNotes = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })
    if (duplicateNotes.length === 0 ) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const removeNotes = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })
    saveNotes(notesToKeep)
    if(notes.length === notesToKeep.length){
        console.log(chalk.bgRed("No note found!"))
    } else {
        console.log(chalk.bgGreen("Note removed!"))
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (err) {
        return []
    }
}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes
}