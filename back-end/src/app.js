const express = require('express')
const bodyParser = require('body-Parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) =>{
    res.send({
        message: 'Hello ' + req.body.email +  ' you reggy have fun lol'
    })
})

app.listen(process.env.PORT || 8081) 