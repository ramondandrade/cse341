const routes = require('express').Router();
const users = require('../controllers/userController');
const validation = require('../middleware/validate');
const isAuthenticated = require('../middleware/authenticate');

routes.get('/', isAuthenticated, users.getAllUsers);
routes.get('/:id', isAuthenticated, users.getUser);
routes.post('/', isAuthenticated, validation.validateUser, users.createUser);
routes.put('/:id', isAuthenticated, validation.validateUser, users.updateUser);
routes.delete('/:id', isAuthenticated, users.deleteUser);

module.exports = routes;
