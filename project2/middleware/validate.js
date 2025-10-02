const validator = require('../helpers/validate');

const validatePost = (req, res, next) => {
  const validationRule = {
    title: 'required|string',
    content: 'required|string',
    authorId: 'required|string',
    tags: 'array',
    likes: 'integer',
    isPublished: 'boolean',
    imageUrl: 'string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        errors: err
      });
    } else {
      next();
    }
  });
};

const validatePostUpdate = (req, res, next) => {
  const validationRule = {
    title: 'required|string',
    content: 'required|string',
    authorId: 'string',
    tags: 'array',
    likes: 'integer',
    isPublished: 'boolean',
    imageUrl: 'string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        errors: err
      });
    } else {
      next();
    }
  });
};


const validateUser = (req, res, next) => {
  const validationRule = {
    username: 'required|string',
    email: 'required|email',
    password: 'required|string',
    firstName: 'required|string',
    lastName: 'required|string',
    dateOfBirth: 'date',
    profileImage: 'string',
    bio: 'string'
  };

  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        errors: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
  validatePost,
  validatePostUpdate,
  validateUser
};