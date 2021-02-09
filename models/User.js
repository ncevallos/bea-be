const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  userlevel: {
    type: Number,
    default: 0
    // 0 will be free user 1 paid user 2 admin user
  }
});

module.exports = mongoose.model('user', UserSchema);