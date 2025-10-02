const mongoose = require('mongoose');
const env = require("dotenv").config()
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB_URI;
db.Users = require('./users.js');
db.Posts = require('./posts.js');

module.exports = db;