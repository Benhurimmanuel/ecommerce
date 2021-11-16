const Product = require("../../model/product-repo");
const productSchema = require("../../helpers")
const { v4: uuidv4 } = require('uuid');

const getProductsService = async () => {
    const allProducts = await Product.find();
    if (allProducts) return ({ status: true, payload: allProducts })
    return ({ status: false, payload: null })
}
const addProductService = async (payload) => {
    // await productSchema.validateAsync({
    //     name: payload.name,
    //     price: payload.price,
    // });
    const addproduct = await Product.create(payload)
    if (addproduct) return ({ status: true, payload: addproduct })
    return ({ status: false, payload: null })
}
const getSingleProductService = async (payload) => {
    const singleProduct = await Product.find({ _id: payload.id })
    if (singleProduct) return ({ status: true, payload: singleProduct })
    return ({ status: false, payload: "nill" })
}
const getSoldProductsService = async () => {
    const soldProducts = await Product.find({ orderid: { $exists: true, $ne: [] } })
    if (soldProducts) return ({ status: true, payload: soldProducts })
    return ({ status: false, payload: "nill" })
}
const buyproductService = async (payload) => {
    const buyProduct = await Product.findOneAndUpdate({ _id: payload.id }, { $set: { orderid: uuidv4() }, }, { new: true },);
    if (buyProduct) return ({ status: true, payload: buyProduct })
    return ({ status: false, payload: "nill" })
}
const updateproductService = async (payload) => {
    const updateProduct = await Product.findOneAndUpdate({ _id: payload.id }, { $set: payload.data, }, { new: true },);
    if (updateProduct) return ({ status: true, payload: updateProduct })
    return ({ status: false, payload: "nill" })
}

module.exports = {
    getProductsService,
    addProductService,
    getSingleProductService,
    getSoldProductsService,
    buyproductService,
    updateproductService
}