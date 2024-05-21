const dummyModel = require("../models/dummy.model");

const PostDataDummy = async (req, res, next) => {
  try {
    const { firstname, lastname, phone, email, date, time } = req.body;
    const dump = {
      name: firstname + lastname,
      email: email,
      phone: phone,
      date: date,
      time: time,
    };

    console.log("I am inside dummy data");
    const newData = new dummyModel({ ...dump });
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
    const data = await dummyModel.find({});
    res.json(data);
  } catch (err) {
    console.error(err); // Add error logging
    res.status(500).json({ error: err.message }); // Send appropriate error response
  }
};

module.exports = { PostDataDummy, GetDataDummy };

