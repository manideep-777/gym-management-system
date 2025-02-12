const mongoose = require("mongoose");
const { Schema,model } = mongoose;
const bcrypt = require("bcrypt");

const passportLocalMongoose = require('passport-local-mongoose');

const adminSchema = new Schema({
    // username : {
    //     type : String,
    //     required : true,
    // },
    username: { type: String, required: true, unique: true },
    email : {
        type : String,
        required : true,
        unique: true, 
    },
    // password : {
    //     type : String,
    //     required : true,
    // },
    token : {
        type : String,
    }
  });

adminSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const Admin = model("Admin",adminSchema);
module.exports = Admin; 