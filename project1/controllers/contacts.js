const db = require('../models');
const Contacts = db.contacts;

exports.getAll = (req, res) => {
  console.log('Retrieving all contacts');
  Contacts.find().then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving contacts.',
      });
    });
};

// Find a single Contacts with an id
exports.getOne = (req, res) => {
  const contact_id = req.params.contact_id;
  
  Contacts.find({ _id: contact_id })
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: 'Not found Contacts with id ' + contact_id });
      else res.send(data[0]);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Contacts with contact_id=' + contact_id,
      });
    });
};

// Create and Save a new Contacts
exports.create = (req, res) => {

  console.log("Creating contact:", req.body);

  // Validate request
  if (!req.body.firstName) {
    res.status(400).send({ message: 'First name can not be empty!' });
    return;
  }

  if (!req.body.lastName) {
    res.status(400).send({ message: 'Last name can not be empty!' });
    return;
  }

  if (!req.body.email) {
    res.status(400).send({ message: 'Email can not be empty!' });
    return;
  }

  if (!req.body.favoriteColor) {
    res.status(400).send({ message: 'Favorite Color can not be empty!' });
    return;
  }

  if (!req.body.birthday) {
    res.status(400).send({ message: 'Birthday can not be empty!' });
    return;
  }

  // Create a Contacts
  const contacts = new Contacts({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  });

  // Save Contacts in the database
  contacts
    .save(contacts)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Contacts.',
      });
    });
};

// Update a Contacts by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!',
    });
  }

  const contact_id = req.params.contact_id;

  const contacts = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };

  Object.keys(contacts).forEach(key => {
    if (contacts[key] === '') {
      delete contacts[key];
    }
  });

  Contacts.findByIdAndUpdate(contact_id, contacts, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Contacts with id=${contact_id}. Maybe Contacts was not found!`,
        });
      } else res.send({ message: 'Contacts was updated successfully.' });
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Contacts with id=' + contact_id,
      });
    });
};

// Delete a Contacts with the specified id in the request
exports.delete = (req, res) => {
  const contact_id = req.params.contact_id;

  Contacts.findByIdAndRemove(contact_id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Contacts with id=${contact_id}. Maybe Contacts was not found!`,
        });
      } else {
        res.send({
          message: 'Contacts was deleted successfully!',
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Contacts with id=' + contact_id,
      });
    });
};
