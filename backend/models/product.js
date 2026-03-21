const mongoose = require('mongoose')
const Schema = mongoose.Schema;  

const productSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discountPrice: Number, 
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    images: [{
        url: {
            type: String,
            required: true
        },
        alt: String
    }],
    sizes: {
        type: String,
        enum: ['s', 'm', 'l']
    },
    colors: [String],
    stock: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0
    },
    numReviews: {
        type: Number,
        default: 0
    }
}, {timestamps: true})

const Product = mongoose.model('Product', productSchema);

module.exports= Product;