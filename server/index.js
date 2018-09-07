const express = require('express')
const { json } = require('body-parser')
const session = require('express-session')
const massive = require('massive')

const port = 3001

const app = express()


app.use(json())

app.listen(port , () => {
    console.log(`We are live on port: ${port}`)
})