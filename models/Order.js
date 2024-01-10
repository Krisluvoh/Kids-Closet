const { Schema, model } = require('monmgoose')

const OrderSchema = new Schema({

})

module.exports = model('order', OrderSchema, 'orders')