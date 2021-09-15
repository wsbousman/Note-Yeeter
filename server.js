const express = require('express');
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');
const app = express();
const { notes } = require('./develop/db/db');

// parse incoming string
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// static method for front end resource access
app.use(express.static('./develop/public'));

// FUNCTIONS
function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, './develop/db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}

// ROUTES
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './develop/public/notes.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './develop/public/index.html'));
});

app.get('/api/notes', (req, res) => {
  let results = notes
  res.json(results)
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './develop/public/index.html'));
});

app.post('/api/notes', (req, res) => {
  req.body.id = notes.length.toString();
  const note = createNewNote(req.body, notes);
  res.json(note);
});

// LISTENER
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });