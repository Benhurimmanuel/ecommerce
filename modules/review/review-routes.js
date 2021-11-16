const express = require("express");
const router = express.Router();

const { reviewProductController,
    getSoldProductsController } = require("./review-controller")


router.route("/purchases").get(getSoldProductsController)
router.route("/purchases/:id").put(reviewProductController)


module.exports = router;
