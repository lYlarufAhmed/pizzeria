let mg = require('mongoose')

let OrderSchema = new mg.Schema({
    items: [{
        type: mg.SchemaTypes.ObjectId,
        ref: 'OrderItem'
    }]
}, {timestamps: true})

let Order = new mg.model('Order', OrderSchema)

module.exports = Order