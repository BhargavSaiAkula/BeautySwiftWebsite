const dummyModel = require("../models/dummy.model");
const moment = require('moment');

const PostDataDummy = async (req, res, next) => {
  try {
    const { firstname, lastname, phone, email, date, time, food } = req.body;
    const name= firstname + lastname;
    console.log(req.body);
    const dump = {
      name: name, // Adding space between firstname and lastname
      email: email,
      phone: phone,
      date:date.toString(), // Parse the date string to Date object
      time: time.toString(), // Parse the time string to Date object
      Food: food // Changed to match the schema field name
    };

    console.log(dump);
    console.log("I am inside dummy data");
    
    const newData = new dummyModel(dump);
    const response = await newData.save();
    
    console.log(response);
    res.status(200).json({ message: "Data is submitted" });
  } catch (err) {
    console.error(err); // Add error logging
    res.status(500).json({ error: err.message }); // Send appropriate error response
  }
};

const GetDataDummy = async (req, res) => {
  try {
    const data = await dummyModel.find({}).populate('Food'); // Ensure populated data
    res.json(data);
  } catch (err) {
    console.error(err); // Add error logging
    res.status(500).json({ error: err.message }); // Send appropriate error response
  }
};

module.exports = { PostDataDummy, GetDataDummy };
