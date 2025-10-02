const routes = require('express').Router();
const passport = require('passport');

routes.use('/users', require('./users'));
routes.use('/posts', require('./posts'));
routes.use('/api-docs', require('./swagger'));
routes.use('/auth', passport.authenticate('github')); 
routes.use('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});

routes.use('/', ( req, res ) => {
  res.send('Welcome to the Posts API - Ramon Andrade. ' + (req.session.user ? `Logged in as ${req.session.user.username}` : 'Not logged in: <a href="/auth">Login with GitHub</a>'));
});

module.exports = routes;
