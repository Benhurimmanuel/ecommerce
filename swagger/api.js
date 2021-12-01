/**
 * @swagger
 * /api/product/products:
 *   get:
 *     tags:
 *       - Products
 *     description: Returns all Products
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of Products
 *         schema:
 *           $ref: '#/components/schemas/Products'
 *       500:
 *         description: SERVER ERROR
 */

/**
* @swagger
* /api/product/products:
*   post:
*     tags:
*       - Products
*     description: Adds a new Product to the database
*     produces:
*       - application/json
*     parameters:
*       - name: Product
*         description: Product Object
*         in: body
*         required: true
*     responses:
*       200:
*         description: Successfully added
*       500:
*         description: Server error
*/
/**
 * @swagger
 * /api/product/products/{_id}:
 *   get:
 *     tags:
 *       - Product
 *     description: Returns a single Product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: _id
 *         description: Particular Products Object's ID (Automatically assigned by MongoDB)
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A single product
 *
 *       500:
 *         description: Server Error
 */

/**
 * @swagger
 * /api/product/products/{_id}:
 *   patch:
 *     tags:
 *       - Product
 *     description: Updates buy status of  a single product with orderId
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Product
 *         description: Product object resources
 *         in: body
 *         required: true
 *       - name: _id
 *         description: Product Object ID
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Successfully updated with orderId
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/product/products/{_id}:
 *   put:
 *     tags:
 *       - Product
 *     description: Updates buy status of  a single product with orderId
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Product
 *         description: Product object resources
 *         in: body
 *         required: true
 *       - name: _id
 *         description: Product Object ID
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Successfully updated with orderId
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/product/purchase:
 *   get:
 *     tags:
 *       - Products purchased
 *     description: Returns all Sold Products
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of Products sold
 *         schema:
 *           $ref: '#/components/schemas/Reviews'
 *       500:
 *         description: SERVER ERROR
 */