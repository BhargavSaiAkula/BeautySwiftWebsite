
const dummyModel = require("../models/dummy.model");
const moment = require('moment');

const PostDataDummy = async (req, res, next) => {
  try {
    const { firstname, lastname, phone, email, date, time, food } = req.body;
    const name = `${firstname} ${lastname}`; // Add space between firstname and lastname

    // Log request body for debugging
    console.log(req.body);

    // Ensure date and time are defined before converting to string
    const dump = {
      name: name,
      email: email,
      phone: phone,
      date: date ? date.toString() : '', // Handle undefined date
      time: time ? time.toString() : '', // Handle undefined time
      Food: food // Assuming 'Food' matches the schema field name
    };

    // Log dump object for debugging
    console.log(dump);
    console.log("I am inside dummy data");

    const newData = new dummyModel(dump);
    const response = await newData.save();

    // Log response for debugging
    console.log(response);

    res.status(200).json({ message: "Data is submitted" });
  } catch (err) {
    // Log error for debugging
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

const GetDataDummy = async (req, res) => {
  try {
    const data = await dummyModel.find({}).populate('Food'); // Ensure populated data
    res.json(data);
  } catch (err) {
    // Log error for debugging
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { PostDataDummy, GetDataDummy };
