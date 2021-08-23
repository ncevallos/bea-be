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
  temptedlevelint: {
    type: Number
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
  planphaseint: {
    type: Number
  },
  iephasefeel: {
    type: String
  },
  iephaselength: {
    type: String
  },
  iephaseint: {
    type: Number
  },
  fullphasefeel: {
    type: String
  },
  fullphaselength: {
    type: String
  },
  fullphaseint: {
    type: Number
  },
  aefeel: {
    type: String
  },
  aelength: {
    type: String
  },
  aeint: {
    type: Number
  },
  mindfultype: {
    type: String
  },
  mindfultype2: {
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
