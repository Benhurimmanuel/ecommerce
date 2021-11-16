const {
    getProductsService,
    addProductService,
    getSingleProductService,
    getSoldProductsService,
    buyproductService,
    updateproductService
} = require("./product-service")

const getProductsController = async (req, res, next) => {
    try {
        res.send(await getProductsService())
    } catch (error) {
        next(error)
    }

}
const addProductController = async (req, res, next) => {
    try {
        const payload = req.body
        res.send(await addProductService(payload));
    } catch (error) {
        next(error)
    }

}

const getSingleProductController = async (req, res, next) => {
    try {
        const id = req.params;
        res.send(await getSingleProductService(id))
    } catch (error) {
        next(error)
    }

}

const updateProductControler = async (req, res, next) => {
    try {
        const payload = { id: req.params.id, data: req.body };
        res.send(await updateproductService(payload))
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
const buyProductController = async (req, res, next) => {
    try {
        const id = req.params;
        res.send(await buyproductService(id))
    } catch (error) {
        next(error)
    }

}
module.exports = {
    getProductsController,
    addProductController,
    getSingleProductController,
    getSoldProductsController,
    buyProductController, updateProductControler,
}