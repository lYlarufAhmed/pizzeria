let mg = require('mongoose')
const Pizza = require("./pizza/schema");
const getAllPizzas = require("./pizza/controller");
let pizzas = [
    {
        "name": "Margherita",
        "price": 5,
        "ingredients": [
            "tomato",
            "mozzarella"
        ]
    },
    {
        "name": "Bufala",
        "price": 6,
        "ingredients": [
            "tomato",
            "mozarella di bufala"
        ]
    },
    {
        "name": "Romana",
        "price": 5,
        "ingredients": [
            "tomato",
            "mozzarella",
            "anchovies",
            "oregano",
            "oil"
        ]
    },
    {
        "name": "Diavola",
        "price": 7.5,
        "ingredients": [
            "tomato",
            "mozzarella",
            "spicy salami"
        ]
    },
    {
        "name": "Pizza Bianca",
        "price": 5,
        "ingredients": [
            "mozzarella",
            "oregano"
        ]
    }
]
(async function () {
    console.log()
    await mg.connect("mongodb://127.0.0.1/pizzeria",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
    )
})()


(async function () {
    for (let p of pizzas) {
        let buffer = new Pizza(p)
        await buffer.save()
    }
})()

module.exports = {
    getAllPizzas
}