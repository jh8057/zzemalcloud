const express = require('express');
const router = express.Router();

const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Express Service with Swagger!',
            version: '1.0.0',
            description: 'A REST API using swagger and express.',
        },
        servers: [
            {
                url: 'http://localhost:3000/zzemalcloud/',
            },
        ],
    },
    apis: [],
};
const specs = swaggerJsDoc(options);
router.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = router;
