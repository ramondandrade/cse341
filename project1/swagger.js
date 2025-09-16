const swaggerAutogen = require('swagger-autogen')();
const PORT = process.env.PORT || 8080;

const doc = {
    info: {
        title: 'Ramon Andrade Contacts API',
        description: 'API for managing contacts'
    },
    host: 'localhost:'+PORT,
    schemes: ['http','https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);