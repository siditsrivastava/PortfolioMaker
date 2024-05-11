const mongoose = require("mongoose")

const experienceData = new mongoose.Schema(
    {
        companyName:{
            type:String,
            require:true
        },
        position:{
            type:String,
            require:true
        },
        profileSummary:{
            type:String,
            require:true
        },
        joiningDate:{
            type:Date,
            require:true
        },
        leavingDate:{
            type:Date,
            // require:true
        },
        currentlyWorking:{
            type:Boollen,
            require:true
        }

    }
     , {timestamps:true})

const userExperienceData = mongoose.model("userExperienceData" , experienceData)

module.exports = userExperienceData 