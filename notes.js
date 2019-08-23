const fs = require('fs');
const chalk = require('chalk');

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title);

    debugger
    console.log(duplicateNotes);
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log('New note added!');
    }
    else {
        console.log('Title already taken!');
    }
}



const removeNotes = (title) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title !== title);

    if (notes.length > duplicateNotes.length) {
        saveNotes(duplicateNotes);
        console.log(chalk.green('note removed'));


    } else {
        console.log('Note does not exist!');
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJsON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        return data;
    }
    catch (e) {
        return [];
    }

}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.red.inverse('Your note '));
    notes.forEach((notes) => {
        console.log(notes.title);
    })
}

const readNote = (title) => {
    const notes = loadNotes();
    const data = notes.find((note) => note.title == title);
    if (data) {
        console.log(data.title);
        console.log(data.body);
    } else {
        console.log('Note does not exist!');
    }

}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}