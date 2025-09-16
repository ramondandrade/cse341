const routes = require('express').Router();

routes.use('/contacts', require('./contacts'));
routes.use('/api-docs', require('./swagger'));

routes.use('/', ( req, res ) => {
  res.send('Welcome to the Contacts API - Ramon Andrade');
});


module.exports = routes;
