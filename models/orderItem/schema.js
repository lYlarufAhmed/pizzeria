let mg = require('mongoose')

let OrderItemSchema = new mg.Schema({
    pizza: {
        type: mg.SchemaTypes.ObjectId,
        ref: 'Pizza',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, {timestamps: true})

let OrderItem = new mg.model('OrderItem', OrderItemSchema)

module.exports = OrderItem