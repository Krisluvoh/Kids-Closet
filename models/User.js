const { Schema, model } = require('monmgoose')

const UserSchema = new Schema({
    username: String,
    password: String
})

module.exports = model('user', UserSchema, 'users')