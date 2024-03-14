//const sqlite3 = require('sqlite3').verbose();

const express = require('express')
const server = express()
const port = 3000

var indexPath = require('path');

//const db = new sqlite3.Database(__dirname + "../Dump20240307.db");

server.use(express.static(__dirname + "/../dist"));

server.use(express.json());
server.use(express.urlencoded());

server.get('/', (req, res) => {
    res.sendFile(indexPath.resolve('../dist/index.html'))
})

server.post('/', (req, res) => {
    res.json(req.body);
    //db.run(`INSERT INTO PATIENTS VALUES (${req.body.firstname}, ${req.body.lastname}, ${req.body.ssn}, ${req.body.doa}, ${req.body.dob})`);
})

server.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})