const routes = require('express').Router();
const posts = require('../controllers/postController');
const validation = require('../middleware/validate');
const isAuthenticated = require('../middleware/authenticate');

routes.get('/', isAuthenticated, posts.getAllPosts);
routes.get('/:id', isAuthenticated, posts.getPost);
routes.get('/users/:id/posts', isAuthenticated, posts.getPostsByUser);
routes.post('/', isAuthenticated, validation.validatePost, posts.createPost);
routes.put('/:id', isAuthenticated, validation.validatePostUpdate, posts.updatePost);
routes.delete('/:id', isAuthenticated, posts.deletePost);

module.exports = routes;
