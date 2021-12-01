const swaggerOptions = {
    swaggerDefinition: {
        info: {

            title: "Ecommerce API",
            description: "This is a sample server for a ecommerce store.",
            servers: [{ url: "http://localhost:3000" }],

        },
        components: {
            "schemas": {
                "Products": {
                    "properties": {
                        "name": {
                            "type": "string"
                        }
                    }
                },
                "Reviews": {
                    "properties": {
                        "qwername": {
                            "type": "string"
                        }
                    }
                }

            }
        }

    },
    apis: ["./modules/products/*.js"]
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerDocs }