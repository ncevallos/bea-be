const mongoose = require('mongoose');

const PlanResultsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  lastblockvisited: {
    type: String
  },
  howdoyoufeel: {
    type: String
  },
  howdoyoufeelint: {
    type: Number
  },
  planjournal: {
    type: String
  },
  stayedontrack: {
    type: String,
  },
  planbadblock: {
    type: String
  },
  what2change: {
    type: String
  },
  influencedeating: {
    type: String
  },
  whathappened: {
    type: String
  },
  somethingelsebad: {
    type: String
  },
  plangoal: {
    type: String
  },
  plangoal2: {
    type: String
  },
  plangoal3: {
    type: String
  },
  plangoal4: {
    type: String
  },
  plangoal5: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  userSubmission: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('planResults', PlanResultsSchema);
