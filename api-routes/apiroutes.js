const router = require('express').Router()
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, results) => {
        if (err) {
            console.log(err)
        }
        res.send(results)
    })
})

router.post('/api/notes', (req, res) => {
    var newNote = req.body
    console.log(req.body)
    fs.readFile('./db/db.json', (err, results) => {
        if (err) {
            console.log(err)
        }
        var oldNotes = JSON.parse(results)
        newNote.id=uuidv4()
        oldNotes.push(newNote)
        console.log(oldNotes)
        fs.writeFile('./db/db.json', JSON.stringify(oldNotes), (err) => {
            if (err) {
                console.log(err)
            }
            res.send(newNote)
        })
    })
    


})

module.exports = router