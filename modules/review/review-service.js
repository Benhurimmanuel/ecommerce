
const Product = require("../../model/product-repo");


const reviewProductService = async (payload) => {

    const updateProduct = await Product.findOneAndUpdate({ _id: payload.id }, { $set: payload.data, }, { new: true },);
    if (updateProduct) return ({ status: true, payload: updateProduct })
    return ({ status: false, payload: "nill" })
}

module.exports = {
    reviewProductService
}