const routes = require('express').Router();
const contacts = require('../controllers/contacts');
const validation = require('../middleware/validate');

routes.get('/', contacts.getAll);
routes.get('/:contact_id', contacts.getOne);
routes.post('/', validation.saveContact, contacts.create);
routes.put('/:contact_id', validation.saveContact, contacts.update);
routes.delete('/:contact_id', contacts.delete);

module.exports = routes;
