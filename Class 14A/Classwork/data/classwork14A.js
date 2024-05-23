//import file system module
const fs = require ('fs');

//import path module
//gives path to file on computer
const path = require('path');

//express - a framework 
const express = require('express');
// const { log } = require('console');

const app = express();

//tell node to use json and HTTP header feature in body-parser - HTTP SETTINGS

//using middleware to intercept requests
//telling express which settings to use - json and urlencoded
app.use(express.json);
app.use(express.urlencoded({extended: true}));

//use path module...add photos.json which is in data folder
const jsonPath = path.join(__dirname, 'data', 'photos.json');
const jsonData = fs.readFileSync(jsonPath,'utf8');

const photos = JSON.parse(jsonData);

//handle requests for static resources
app.use('/static', express.static(path.join(__dirname, 'public')))

//handle api routes
app.get('/',(req,resp) => {
    console.log('hello');
    resp.json(photos)
});

//return just the requested photo
//ex: localhost:8080/1
app.get('/:id', (req,resp) => {
    //change user supplied symbol to upper case
    const idToFind = req.params.id;
    //search the array of objects for a match
    const matches = photos.filter(obj => idToFind == obj.id);
    //return the matching photo
    resp.json(matches)
});

//return photos from country
//':substring' = parameter
app.get('/iso/:substring', (req,resp) => {
    //change user supplied substring to upper case so not case sensitive
    //iso is the state
    const isoToFind = req.params.substring.toLocaleUpperCase();
    //search the array of obects for a match
    const matches = photos.filter(obj => isoToFind == obj.iso);
    resp.json(matches);
})

let port = 8080;
app.listen(port, () => {
        console.log("Server running at port = " + port);
    });