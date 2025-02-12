if (process.env.NODE_ENV != "production") {
    require('dotenv').config()
}

const express = require('express')
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");

const Admin = require("./models/admin_model");

const app = express();
const MONGO_URL = process.env.MONGO_URL;
const userRouter = require("./routes/userRouter");
const adminRouter = require("./routes/adminRouter");


app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: true,
}));


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Admin.authenticate()));

// passport.use(
//     new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
//       try {
//         const admin = await Admin.findOne({ email });

//         console.log("Admin Object:", admin);

//         if (!admin) return done(null, false, { message: "User not found" });
  
//         const isMatch = await admin.comparePassword(password);
//         if (!isMatch) return done(null, false, { message: "Incorrect password" });
  
//         return done(null, user);
//       } catch (error) {
//         return done(error);
//       }
//     })
//   )

passport.use(Admin.createStrategy()); 

passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

// user routers
app.use("/users", userRouter);

// admin routers
app.use("/admin", adminRouter);

main().then(() => {
    console.log("connected to mongoose url")
}).catch((err) => {
    console.error("Failed to connected to mongo ", err)
})

async function main() {
    await mongoose.connect(MONGO_URL);
}


// app.get("/users", (req, res) => {
//     res.send("user");
// })


app.get('/', function (req, res) {
    // console.log(req.session);
    res.send('Hello World');
})

app.listen(8080, () => {
    console.log("listening to port 8080");
})