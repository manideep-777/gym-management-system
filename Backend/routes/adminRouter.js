const { Router } = require("express");
const { register, login, logout, memberData, memberDelete, updateBills, findedMember } = require("../controllers/adminController");
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

router.get("/memberData", memberData);

router.delete("/memberData/:id", memberDelete);

router.post("/memberData/updateBill/:id",updateBills);

router.post("/memberData/:id",findedMember);

  
  

module.exports = router;