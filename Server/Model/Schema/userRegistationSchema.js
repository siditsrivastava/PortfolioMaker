const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userRegistation = new schema(
  {
    firstName: {
      type: String,
      require: [true, " First Name is Required"],
    },
    lastName: {
      type: String,
      require: [true, "Last Name is Required"],
    },
    email: {
      type: String,
      unique: true,
      require: [true, " Email is Required"],
    },
    mobileNo: {
      type: Number,
      require: true,
      unique: [true, " Mobile Number is Required"],
    },
    // password : {
    //     type:String,
    //     require:[true, "Password is required"],
    // }

    gender:{
      type:String,
      // emnu:["MALE" , ]
      require:true
    }

    education: [
      { type: mongoose.Schema.Types.ObjectId, ref: "educationSchemaData" 
        require:true
      },
    ],
  },
  { timestamps: true }
);

const userRegistationData = mongoose.model(
  "userRegistationData",
  userRegistation
);

module.exports = userRegistationData;
