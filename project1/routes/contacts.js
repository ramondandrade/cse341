const routes = require('express').Router();
const contacts = require('../controllers/contacts');

routes.get('/', contacts.getAll);
routes.get('/:contact_id', contacts.getOne);

module.exports = routes;
