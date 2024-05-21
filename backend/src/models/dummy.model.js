
// const mongoose = require('mongoose');

// const DummySchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   phone: {
//     type: String,
//     required: true
//   },
//   date: {
//     type: Date,
//     required: true
//   },
//   time: {
//     type: String,
//     required: true
//   }
// });

// const DummyModel = mongoose.model('Dummy', DummySchema);

// module.exports = DummyModel;

const mongoose = require('mongoose');
const moment = require('moment');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const DummySchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  date: {
    type: String, // Store as a formatted string
    required: true
  },
  time: {
    type: String,
    required: true
  }
});

// Pre-save hook to format the date
DummySchema.pre('save', function(next) {
  if (this.date) {
    // Parse the incoming date string using moment
    const parsedDate = moment(this.date);
    // Format the parsed date to "MMM DD YYYY" format
    this.date = parsedDate.format('MMM DD YYYY');
  }
  next();
});

// Apply the auto-increment plugin to the schema
DummySchema.plugin(AutoIncrement, { inc_field: 'id' });

const DummyModel = mongoose.model('Dummy', DummySchema);

module.exports = DummyModel;
