const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const userRegistationData = require("./Model/Schema/userRegistationSchema");
const educationSchemaData = require("./Model/Schema/EducationSchema");

try {
  mongoose
    .connect(process.env.DATABASEURL)
    .then(() => console.log("Connected Successfully !!"));
} catch (err) {
  return res.status(404).json("Database not connected successfully");
}

router.post("/reg", async (req, res) => {
  const { firstName, lastName, email, mobileNo, password } = req.body;
  if (!firstName || !lastName || !email || !mobileNo || password) {
    return res.status(422).json("Please Provide the correct Data");
  }
  try {
    await userRegistationData.findOne({ email: email }).then((userExist) => {
      if (userExist) {
        return res.status(422).json("Email is Already Exist");
      }
    });
    const user = new userRegistationData({
      firstName,
      lastName,
      email,
      mobileNo,
      password,
    });
    await user.save().then((userData) => {
      console.log(userData);
      return res.status(201).json("Successfully Register");
    });
  } catch (err) {
    return res.status(500).json(err.message);
  }

  //  res.send({message : req.body})
});

router.post("/edu", async (req, res) => {
  const { university } = req.body;
  try {
    const userEducationData = new educationSchemaData({ university });
    await userEducationData.save().then((educationData) => {
      console.log(educationData);
      return res.status(201).json("Successfully Submit");
    });
  } catch (err) {
    console.log(err);   
  }
});

module.exports = router;
