const express = require('express')
const morgan = require('morgan')
const cors = require('cors')


const app = express()
const PORT = 30001
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())




app.route('/api/order').get(async (req, response) => {
    let books = []
})
