const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
var mysql = require('mysql');
const db = require('./connection')

app.use(bodyParser.json())

app.get('/', (req, res) => {
  // db.Insertuser('testerman', 'asd@gmail.com', '123123', 'Student')
  // db.Updateuser('id', 'testerman134', 'abcd@gmail.com', 'password1', 'ADMIN')
  // db.Deleteuser('testerman123')
  // db.Selectuser('Test@gmail.com', 'Testing123', (result) => res.send(result))
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})