
const {Schema, model} = require('mongoose');

const orderSchema = new Schema({
    products: [{
        id: {
            type: Schema.Types.ObjectId,
            ref: 'product'
        }
    }],
    username: String
    // user: {
    //     email: {
    //         type: String,
    //         required: true
    //     },
    //     userId: {
    //         type: Schema.Types.ObjectId,
    //         required: true,
    //         ref: 'User'
    //     }
    // },
    // shippingInfo: {
    //     firstName: {
    //         type: String,
    //         required: true
    //     },
    //     lastName: {
    //         type: String,
    //         required: true
    //     },
    //     address: {
    //         type: String,
    //         required: true
    //     },
    //     city: {
    //         type: String,
    //         required: true
    //     },
    //     state: {
    //         type: String,
    //         required: true
    //     },
    //     zipcode: {
    //         type: Number,
    //         required: true
    //     }
    // },
    // payment: {
    //     paymentDetail: {
    //         type: Array,
    //         required: true
    //     }
    // }
});

module.exports = model('order', orderSchema, 'orders')