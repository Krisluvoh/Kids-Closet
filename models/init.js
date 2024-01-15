// expose environment variables
require('dotenv').config()
const { MONGO_URL } = process.env

const mongoose = require('mongoose')

const Product = require('./Product.js')
const initialProducts = require('./initialData/products.js')

/*
    cd ..
    node models/init

    npm i mongoose express cors dotenv
*/

mongoose.connect(MONGO_URL)
    .then(async ()=>{
        console.log(`
        SUCCESSFULLY connected to database
        `)

        // add products to database
        // initialProducts.forEach(async p => {
        //     let newProduct = new Product(p)
        //     await newProduct.save()
        // })
        // let products = await Product.find({})
        // console.log(products)
    })
    .catch((error)=>{
        console.log(`
        ERROR connecting to database
        `)
        console.log(error)
    })