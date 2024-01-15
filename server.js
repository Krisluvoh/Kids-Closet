// nodemon server

// expose environment variables
require('dotenv').config()
const { MONGO_URL } = process.env

const mongoose = require('mongoose')
const express = require('express')

const Product = require('./models/Product.js')

const app = express()
app.use(require('cors')())
const PORT = process.env.PORT || 4321


app.get('/api/products', async (req, res) => {
    let products = await Product.find({})
    res.json(products)
})

mongoose.connect(MONGO_URL)
    .then(()=>{
        console.log(`
        SUCCESSFULLY connected to database
        `)
        app.listen(PORT, ()=>{
            console.log(`
        Listening on port ${PORT}
        http://localhost:${PORT}/
            `)
        })
    })
    .catch((error)=>{
        console.log(`
        ERROR connecting to database
        `)
        console.log(error)
    })