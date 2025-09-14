const db = require('../models');
const Contacts = db.contacts;

exports.getAll = (req, res) => {
  console.log('Retrieving all contacts');
  Contacts.find().then((data) => {
    console.log(data);
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
  console.log('Retrieving contact with id: ' + contact_id);
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
