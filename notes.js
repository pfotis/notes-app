const fs = require('fs');
const chalk = require('chalk')
const { Console } = require('console');
const { constants } = require('buffer');

const addNotes = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(notes.length === notesToKeep.length){
        console.log(chalk.red.inverse("No note found!"))
    } else {
        console.log(chalk.green.inverse("Note removed!"))
        saveNotes(notesToKeep)
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse("Your Notes"))
    notes.forEach((note) => {
        console.log(chalk.bgRed(note.title))
    })
}

const readNotes = (title) => {
    const notes = loadNotes()
    const readNote = notes.find((note) => note.title === title)
    if(readNote){
        console.log(chalk.gray.inverse.italic(readNote.title))
        console.log(readNote.body)
    } else {
        console.log(chalk.red.inverse("no note found"))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = () => {
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
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}