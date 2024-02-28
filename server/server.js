const express = require('express')
const server = express()
const port = 3000

var indexPath = require('path')

server.use(express.static(__dirname + "/../dist"))

server.get('/', (req, res) => {
    res.sendFile(indexPath.resolve('../dist/index.html'))
})

server.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})