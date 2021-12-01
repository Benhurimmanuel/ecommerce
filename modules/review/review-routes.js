const express = require("express");
const router = express.Router();

const { reviewProductController,
    getSoldProductsController } = require("./review-controller")




router.route("/purchases").get(getSoldProductsController)

/**
 * @swagger
 * /api/product/purchases/{_id}:
 *   put:
 *     tags:
 *       - Review
 *     description: Updates Review rating of  a single product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Product
 *         description: Product Review resources
 *         in: body
 *         required: true
 *       - name: _id
 *         description: Product Object ID
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Successfully updated with review
 *       500:
 *         description: Server error
 */
router.route("/purchases/:id").put(reviewProductController)


module.exports = router;
