const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const {getAllPizzas} = require("./models");


const app = express()
const PORT = 3001
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())




app.route('/api/order').get(async (req, response) => {
    let books = []
})
app.route('/api/order').get(async (req, response) => {
    let books = []
})
app.route('/api/pizza').get(async (req, res) => {
    let pizzas = await getAllPizzas()
    res.json(pizzas)
})


app.listen(PORT, ()=>console.log('Listening to localhost:'+PORT))