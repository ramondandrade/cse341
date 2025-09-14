const mongoose = require('mongoose');
const env = require("dotenv").config()
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB_URI;
db.contacts = require('./contacts.js')(mongoose);

module.exports = db;
