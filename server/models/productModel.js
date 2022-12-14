const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: [true, "Please add a name"],
        trim: true,
    },
    sku: {
        type: String,
        required: true,
        default: 'SKU',
    },
    category: {
        type: String,
        required: [true, "Please add a category"],
    },
    quantity: {
        type: String,
        required: [true, "Please add a quantity"],
        trim: true,
    },
    price: {
        type: String,
        required: [true, "Please add a price"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Please add a description"],
        trim: true,
    },
    image: {
        type: Object,
        default: {},
    },
    
}, {
    timeStamps: true,
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product