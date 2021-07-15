const mongoose = require('mongoose');

const MeditateResultsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  videoswatched: {
      video: {
        type: String,
        date: {
            type: Date,
            default: Date.now
        }
      },
  }
});

module.exports = mongoose.model('meditateResults', MeditateResultsSchema);
