const mongoose = require("mongoose");
const User = require("../models/user_model.js");
require("dotenv").config({path: "../.env"});
const bcrypt = require("bcrypt");

const MONGO_URL = process.env.MONGO_URL;

const gymUsers = [
    {
      username: "JohnDoe",
      email: "john.doe@example.com",
      password: "password123",
      membership: true,
    },
    {
      username: "JaneSmith",
      email: "jane.smith@example.com",
      password: "securepassword456",
      membership: false,
    },
    {
      username: "MikeJohnson",
      email: "mike.johnson@example.com",
      password: "mike_pass789",
      membership: true,
    },
    {
      username: "EmilyBrown",
      email: "emily.brown@example.com",
      password: "emily12345",
      membership: false,
    },
    {
      username: "ChrisLee",
      email: "chris.lee@example.com",
      password: "chrisLee987",
      membership: true,
    },
    {
      username: "SophiaMiller",
      email: "sophia.miller@example.com",
      password: "sophiaPassword!",
      membership: true,
    },
    {
      username: "LiamWilson",
      email: "liam.wilson@example.com",
      password: "liam_secret",
      membership: false,
    },
    {
      username: "OliviaMartinez",
      email: "olivia.martinez@example.com",
      password: "olivia@123",
      membership: true,
    },
    {
      username: "JamesAnderson",
      email: "james.anderson@example.com",
      password: "anderson_james456",
      membership: false,
    },
    {
      username: "MiaTaylor",
      email: "mia.taylor@example.com",
      password: "mia_taylor_pwd",
      membership: true,
    },
  ];
  

mongoose
    .connect(MONGO_URL)
    .then(() => {console.log("connected to mongoose url")})
    .catch((err) => { console.error("Failed to connected to mongo ", err) })

    const init = async () => {
      try {
          remove();
          let newGymUsers = await Promise.all(
              gymUsers.map(async (el) => {
                  return { ...el, password: await bcrypt.hash(el["password"], 10) };
              })
          );
  
          await User.insertMany(newGymUsers);
          console.log("Users inserted successfully");
      } catch (error) {
          console.error("Error occurred:", error);
      }
  };
  

const remove = async () => {
  try {
    await User.deleteMany({});
  } catch (error) {
    console.log(error);
  }
}

init();

