const { Schema, model } = require('mongoose')

const ProductSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    category: String,
    price: Number,
    img: String,
    featured: Boolean,
    desc: String,
    available: {
        type: Boolean,
        default: true
    }
})

module.exports = model('product', ProductSchema, 'products')