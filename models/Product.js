const { Schema, model } = require('monmgoose')

const ProductSchema = new Schema({

})

module.exports = model('product', ProductSchema, 'products')