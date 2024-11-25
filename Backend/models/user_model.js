const mongoose = require("mongoose");
const { Schema,model } = mongoose;

const userSchema = new Schema({
    username : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    membership : {
        type : Boolean,
        default : false,
    },
    token : {
        type : String,
    }
  });

const User = model("User",userSchema);
module.exports = User; 