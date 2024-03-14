const express = require('express')
const server = express()
const port = 3000

const sqlite3 = require("sqlite3").verbose();


var indexPath = require('path');



server.use(express.static(__dirname + "/../dist"));

server.use(express.json());
server.use(express.urlencoded());

server.get('/', (req, res) => {
    res.sendFile(indexPath.resolve('../dist/index.html'))
})

server.post('/', (req, res) => {
    res.json(req.body);
})

server.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})