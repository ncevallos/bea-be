const mongoose = require('mongoose');

const MotivateResultsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  lastblockvisited: {
    type: String
  },
  temptedlevel: {
    type: String
  },
  vistype: {
    type: String
  },
  plan2eat: {
    type: String
  },
  whyhungry: {
    type: String,
  },
  overindulgeresult: {
    type: String
  },
  differentchoice: {
    type: String
  },
  differentchoice2: {
    type: String
  },
  planphasefeel: {
    type: String
  },
  planphaselength: {
    type: String
  },
  iephasefeel: {
    type: String
  },
  iephaselength: {
    type: String
  },
  fullphasefeel: {
    type: String
  },
  fullphaselength: {
    type: String
  },
  aefeel: {
    type: String
  },
  aelength: {
    type: String
  },
  mindfultype: {
    type: String
  },
  mindfulresult: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('motivateResults', MotivateResultsSchema);
