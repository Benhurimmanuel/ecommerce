const { reviewProductService } = require("./review-service")
const { getSoldProductsService } = require("./../products/product-service")


const reviewProductController = async (req, res, next) => {
    try {
        const payload = { id: req.params.id, data: req.body };
        res.send(await reviewProductService(payload))
    } catch (error) {
        next(error)
    }

}

const getSoldProductsController = async (req, res, next) => {
    try {
        const id = req.params;
        res.send(await getSoldProductsService(id))
    } catch (error) {
        next(error)
    }

}

module.exports = {
    reviewProductController,
    getSoldProductsController
}