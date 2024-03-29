const express = require('express')
const server = express()
const port = 3000

let indexPath = require('path');
let mysql = require('mysql2');

let db = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root', //change this if it is different
    password: 'Awesomearden1234', //change this to password
    database: 'Infirmassist' 
});


server.use(express.static(__dirname + "/../dist"));

server.use(express.json());
server.use(express.urlencoded());

server.get('*', (req, res) => {
    res.sendFile(indexPath.resolve(__dirname + '/../dist/index.html'))
    /*db.connect(() => {
        db.query('DELETE FROM PATIENT');
    });
    db.connect((err) => {
        if (err) throw err;
        db.query('SELECT * FROM PATIENT', (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    });
    */
});

server.post('/', (req, res) => {
    let data = req.body;
    db.connect((err) => {
        if (err) throw err;
        db.query(`INSERT INTO PATIENT (Fname, Lname, ssn, doa, dob) VALUES ('${data.firstname}', '${data.lastname}', '${data.ssn}', '${data.doa}', '${data.dob}')`, (err) => {
            if (err) throw err;
        });
    });
    db.connect((err) => {
        if (err) throw err;
        db.query('SELECT * FROM PATIENT', (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    });
    res.sendFile(indexPath.resolve(__dirname + '/../dist/index.html'))
});

server.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});