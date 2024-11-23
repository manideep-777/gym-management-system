if (process.env.NODE_ENV != "production") {
    require('dotenv').config()
}

const express = require('express')
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const MONGO_URL = process.env.MONGO_URL;

mongoose
    .connect(MONGO_URL)
    .then(() => {console.log("connected to mongoose url")})
    .catch((err) => { console.error("Failed to connected to mongo ", err) })

app.use(cors());
app.use(express.urlencoded({ extended: true }))

app.get("/users", (req, res) => {
    res.send("user");
})

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.listen(8080, () => {
    console.log("listening to port 8080");
})