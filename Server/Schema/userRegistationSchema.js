const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userRegistation = new schema({
    firstName : {
        type:String,
        require:true,
    },
    lastName : {
        type:String,
        require:true,
    },
    email : {
        type:String,
        require:true,
    },
    mobileNo : {
        type:Number,
        require:true,
    }

})

const userData = mongoose.model('userRegistation', userRegistation);

module.exports = userData