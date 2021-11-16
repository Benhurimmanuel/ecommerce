const express = require("express");
const router = express.Router();

const { getProductsController,
    addProductController,
    getSingleProductController,
    buyProductController, updateProductControler,
    getSoldProductsController } = require("./product-controller")

router.route("/products").get(getProductsController).post(addProductController);

router.route("/products/:id").get(getSingleProductController).put(buyProductController).patch(updateProductControler);

router.route("/purchase").get(getSoldProductsController)

module.exports = router;
