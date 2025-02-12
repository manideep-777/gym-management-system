const { Router } = require("express");
const { register, login, logout } = require("../controllers/adminController");
const passport = require("passport");

const router = Router();

router.route("/register").post(register);

// router.route("/login").post(passport.authenticate('local'
//     // , { failureRedirect: '/login' , failureFlash : true}
// ) 
//     ,login);

router.post("/login", passport.authenticate("local"),

//  (req, res) => {
//     res.json({ message: "Login successful", user: req.user });
//   }

login

);

router.get("/logout", logout);
  
  

module.exports = router;