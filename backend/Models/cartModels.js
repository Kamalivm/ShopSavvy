const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    },
    img: String,
    title: String,
    price: Number,
    description: String,
    quantity: {
        type: Number,
        default: 1
    }
});

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: [cartItemSchema],
    totalAmount: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Cart', cartSchema);
