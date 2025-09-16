const routes = require('express').Router();
const contacts = require('../controllers/contacts');

routes.get('/', contacts.getAll);
routes.get('/:contact_id', contacts.getOne);
routes.post('/', contacts.create);
routes.put('/:contact_id', contacts.update);
routes.delete('/:contact_id', contacts.delete);

module.exports = routes;
