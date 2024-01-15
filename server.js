
// npm i express mongoose cors
/*
    git add . && git commit -m 'removed dist from frontend gitignore' && git push origin main
*/


// expose environment variables
require('dotenv').config()
const { MONGO_URL, SECRET } = process.env

// JWT Stuff
const { verify, sign } = require('jsonwebtoken')

const signToken = token => sign(token, SECRET)
const verifyToken = token => verify(token, SECRET)

const mongoose = require('mongoose')
const express = require('express')

const Product = require('./models/Product.js')
const User = require('./models/User.js')
const Order = require('./models/Order.js')

const app = express()
const PORT = process.env.PORT || 4321
app.use(require('cors')())
app.use(express.json())
app.use(express.static('frontend/dist'))

app.use((req,res,next)=>{
    console.log(`
        ${req.method}/${req.url}
    `)
    next()
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend/dist/index.html')
})

app.get('/api/product/:id', async (req, res) => {
    let product = await Product.findOne({_id: req.params.id})
    // console.log(product)
    if (!product) {
        res.status(404).send("Not found")
    }
    res.json(product)
})

app.get('/api/products', async (req, res) => {
    let products = await Product.find({})
    res.json(products)
})

// LOGIN ROUTE
app.get('/api/user', async (req, res) => {
    const username = req.headers['x-username']
    const password = req.headers['x-password']
    const match = User.findOne({username, password})
    if (!match) {
        res.status(400).send({msg: "Invalid user"})
        return
    } 

    res.send({msg: 'success', token: signToken({username, password})})
})

// SIGN UP ROUTE
app.post('/api/user', async (req, res) => {
    // console.log(req.body)
    let newUser = new User(req.body)
    await newUser.save()
    res.send("success")
})

// AUTH ROUTE
app.get('/api/authenticate', async (req, res) => {
    const token = req.headers['x-token']
    const {username, password} = verifyToken(token)
    const match = User.findOne({username, password})
    if (!match) {
        res.status(400).send({msg: "Invalid user"})
        return
    }
    const orders = await Order.find({username})
    res.json({username, orders})
})

// PLACE ORDER ROUTE
app.post('/api/order', async (req, res) => {
    let {username, products} = req.body
    // console.log(username,products)
    products = products.map(id => new mongoose.Types.ObjectId(id))
    const newOrder = new Order({username, products})
    await newOrder.save()
    res.send("")
})

mongoose.connect(MONGO_URL)
    .then(async ()=>{
        console.log(`
        SUCCESSFULLY connected to database
        `)
        app.listen(PORT, ()=>{
            console.log(`
        Listening on port ${PORT}
        http://localhost:${PORT}/
            `)
        })

        // let orders = await Order.find({})
        // console.log(orders)

        // await Order.deleteMany({})
    })
    .catch((error)=>{
        console.log(`
        ERROR connecting to database
        `)
        console.log(error)
    })