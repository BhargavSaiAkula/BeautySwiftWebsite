const mongoose = require('mongoose');

// Define the Coupon schema
const DummySchema = new mongoose.Schema({
  name: {type:String,required:true},
  email: {type:String,required:true},
  phone:{type:Number,required:true},
  date:{type:Date,required:true},
  time: {
    type: String,
    requried:true,
  },
});

// Define and export the Coupon model
const Dummy = mongoose.model('Dummy', DummySchema);
module.exports = Dummy;
