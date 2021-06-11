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
async function createConnection () {
    console.log()
    await mg.connect("mongodb://127.0.0.1/pizzeria",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
    )
}
createConnection()


// async function createPizzas () {
//     for (let p of pizzas) {
//         let newPizza = {...p, 'ingredients': {name: p.ingredients} }
//         console.log(newPizza)
//         let buffer = new Pizza(newPizza)
//         await buffer.save()
//     }
// }

// createPizzas()

module.exports = {
    getAllPizzas
}