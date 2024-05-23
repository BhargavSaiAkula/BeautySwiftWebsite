const mongoose = require('mongoose');
const moment = require('moment');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Food = require('./food.model');

const DummySchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  Food: { 
    type: mongoose.SchemaTypes.ObjectId, 
    required: true, 
    ref: 'Food' 
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
    type: String, // Store phone as a string
    required: true
  },
  date: {
    type: String, 
    required: true
  },
  time: {
    type: String,
    required: true
  }
});

// Pre-save hook to format the date and time
DummySchema.pre('save', function(next) {
  if (this.date) {
    // Parse the incoming date string using moment
    const parsedDate = moment(this.date);
    this.date = parsedDate.toDate(); // Convert to Date object
  }
  if (this.time) {
    // Parse the incoming time string using moment
    const parsedTime = moment(this.time, "hh:mm A");
    this.time = parsedTime.toDate(); // Convert to Date object
  }
  next();
});

// Apply the auto-increment plugin to the schema
DummySchema.plugin(AutoIncrement, { inc_field: 'id' });

const DummyModel = mongoose.model('Dummy', DummySchema);

module.exports = DummyModel;