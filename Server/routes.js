const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const userData = require("./Schema/userRegistationSchema");

mongoose
  .connect(process.env.DATABASEURL)
  .then(() => console.log("Connected Successfully !!"))
  .catch((err) => {
    console.log("Not Connected Successfully !!");
    console.error(err);
  });

router.post("/reg", async (req, res) => {
  const { firstName, lastName, email, mobileNo } = req.body;
  if (!firstName || !lastName || !email || !mobileNo) {
    return res.status(422).json("Please Provide the correct Data");
  }
  try {
    await userData.findOne({ email: email }).then((userExist) => {
      if (userExist) {
        return res.status(422).json("Email is Already Exist");
      }
    });

    const user = new userData({ firstName, lastName, email, mobileNo });
    await user.save().then((userItem) => {
      console.log(userItem);
      return res.status(201).json("Successfully Registor");
    });
  } catch (err) {
    return res.status(500).json(err.message);
  }

  //  res.send({message : req.body})
});

module.exports = router;
