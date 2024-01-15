const { Schema, model } = require('mongoose')

const OrderSchema = new Schema({

})

module.exports = model('order', OrderSchema, 'orders')