const express = require("express");
const ProductRoutes = require('./modules/products/product-routes')
const ReviewRoutes = require('./modules/review/review-routes')
require('dotenv').config()

const ConnectDB = require('./config/db');
const app = express();
ConnectDB();

// middleware
app.use(express.json());


//Routes
app.use("/api/product", ProductRoutes);
app.use("/api/review", ReviewRoutes);
app.get('*', (req, res) => {
    res.status(404).json({ message: 'resource not found' });
});

//eror handeling
app.use((error, req, res, next) => {
    const response = {
        status: false,
    };
    if (error) {
        if (error.name) response.errName = error.name;
        response.message = error.message;
        console.error(error.stack);
        res.send(response);
    }
});

app.listen(process.env.port || 3000, () => {
    console.log("server running in port 3000");
})