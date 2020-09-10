const swaggerUi = require('swagger-ui-express');
const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');

const swaggerConfig = require('../config/swagger-config');

const specs = swaggerJsdoc(swaggerConfig);

module.exports = app => {
    const router = express.Router();

    app.use('/docs', router);
    app.use(swaggerUi.serve);
    app.use('/', swaggerUi.setup(specs, { explorer: true }));
};
