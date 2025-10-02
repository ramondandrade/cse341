const swaggerAutogen = require('swagger-autogen')();
require('dotenv').config();
const PORT = process.env.PORT || 8080;

const doc = {
    info: {
        title: 'Ramon Andrade Post API',
        description: 'API for managing posts and users with GitHub OAuth authentication'
    },
    host: process.env.NODE_ENV==='production'?'cse341project2-3b6j.onrender.com': 'localhost:'+PORT,
    schemes: process.env.NODE_ENV==='production'? ['https'] : ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);