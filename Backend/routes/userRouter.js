const { Router } = require("express");
const { register, login, updateMember } = require("../controllers/userController");

const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateMember").put(updateMember);

module.exports = router;