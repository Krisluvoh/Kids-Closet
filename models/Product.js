const { Schema, model } = require('mongoose')

const ProductSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    img: String,
    featured: Boolean
})

module.exports = model('product', ProductSchema, 'products')