// expose environment variables
require('dotenv').config()
const { MONGO_URL } = process.env

const mongoose = require('mongoose')
const express = require('express')

const app = express()
const PORT = process.env.PORT || 4321


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