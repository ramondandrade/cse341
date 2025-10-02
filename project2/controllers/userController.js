const db = require('../models');
const Users = db.Users;

// Create a user
exports.createUser = async (req, res) => {

  try {

    const { username, email, password, firstName, lastName, dateOfBirth, profileImage, bio } = req.body;

    const user = new Users({
      username,
      email,
      password,
      firstName,
      lastName,
      dateOfBirth,
      profileImage: profileImage || null,
      bio: bio || null,
    });
    const savedUser = await user.save();

    res.status(201).json(savedUser);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a specific user
exports.getUser = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a user
exports.updateUser = async (req, res) => {
  try {

    const { username, email, password, firstName, lastName, dateOfBirth, profileImage, bio } = req.body;

    const user = {
      username,
      email,
      password,
      firstName,
      lastName,
      dateOfBirth,
      profileImage: profileImage || null,
      bio: bio || null,
    };

    const updatedUser = await Users.findByIdAndUpdate(
      req.params.id,
      user,
      { useFindAndModify: false }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json( { status: true, message: 'User updated successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    const user = await Users.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};