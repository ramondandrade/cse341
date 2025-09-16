const swaggerAutogen = require('swagger-autogen')();
const PORT = process.env.PORT || 8080;

const doc = {
    info: {
        title: 'Ramon Andrade Contacts API',
        description: 'API for managing contacts'
    },
    host: process.env.NODE_ENV==='production'?'cse341project1-0a6p.onrender.com': 'localhost:'+PORT,
    schemes: process.env.NODE_ENV==='production'? ['https'] : ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);