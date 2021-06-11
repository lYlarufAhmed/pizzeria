let Pizza = require('schema')

let getAllPizzas = async () => {
    try {

        let pizzas = await Pizza.find()
        return pizzas
    }catch (e) {
        console.log(e)
        return false
    }

}

module.exports = getAllPizzas