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

let total = initialProducts.length
let complete = 0

function logTotal() {
    complete++
    console.log(`${complete} of ${total} completed`)
}

mongoose.connect(MONGO_URL)
    .then(async ()=>{
        console.log(`
        SUCCESSFULLY connected to database
        `)

        // Product.deleteMany({})
        //     .then(()=>{
        //         console.log('data deleted')
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })

        // add products to database
        // initialProducts.forEach(async p => {
        //     let newProduct = new Product(p)
        //     await newProduct.save()
        //     logTotal()
        // })

        // watch for updates
        initialProducts.forEach(async p => {
            const match = await Product.findOne(p)
            if (match) {
                console.log("Match found. Not updating.")
                logTotal()
                return
            }
            Product.findOneAndUpdate({name: p.name}, p)
                .then(()=>{
                    console.log('Updated ' + p.name)
                    logTotal()
                })
                .catch(err => {
                    console.log('Failed updating ' + p.name)
                    console.log(err)
                })
        })

    })
    .catch((error)=>{
        console.log(`
        ERROR connecting to database
        `)
        console.log(error)
    })