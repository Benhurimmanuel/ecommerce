const mongoose = require('mongoose');
require('dotenv').config()
const ConnectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB);
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
module.exports = ConnectDB;
