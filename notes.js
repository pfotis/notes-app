const fs = require('fs');
const chalk = require('chalk')
const { Console } = require('console');

const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })
    if (duplicateNotes.length === 0 ) {
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
    const notesToKeep = notes.filter((note) => {
        return note.title !== title
    })
    if(notes.length === notesToKeep.length){
        console.log(chalk.red.inverse("No note found!"))
    } else {
        console.log(chalk.green.inverse("Note removed!"))
        saveNotes(notesToKeep)
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
    removeNotes: removeNotes
}