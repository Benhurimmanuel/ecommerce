const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: String, required: true },
        categories: { type: Array },
        orderid: { type: Array },
        rating: { type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);



// Benhur-ecommerce
// Benhur@123