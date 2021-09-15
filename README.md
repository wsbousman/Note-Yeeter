Note Taker App

A spectacularly overcomplicated note taking application written using Express.js and many gallons of coffee. 

User input is accepted in the form of both note titles and content. When content is added, a save icon is styled as visible. When clicked, 
the data is POSTed and the fs module saves it to a db.json file, which is then read via a GET in order to display the note titles in a 
list. If clicked, these titles display the note content. Clicking the plus icon in the top right corner will then allow users to input 
a new note. All routes function as required, including wildcard. 