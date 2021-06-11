let mg = require('mongoose')

const PizzaSchema = new mg.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    ingredients:{
        name: [String]
    }
}, {timestamps: true})

const Pizza = new mg.model('Pizza',PizzaSchema)
module.exports = Pizza