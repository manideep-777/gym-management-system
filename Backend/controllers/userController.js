const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");
const crypto = require("crypto");
const User = require("../models/user_model.js");

const register = async (req, res) => {
    try {
        let { username, email, password } = req.body;

        if (!username || !email || !password){
            return res.status(StatusCodes.BAD_REQUEST).json({ message : "send proper data." });
        }

        let existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(StatusCodes.CONFLICT).json({ message: "User already existed." });
        }

        let hashedPassword = await bcrypt.hash(password, 10);

        let newUser = new User({
            username: username,
            email: email,
            password: hashedPassword,
        })
        await newUser.save();
        return res.status(StatusCodes.CREATED).json({ message: "user successfully registered." });
    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Internal server error." });
    }

}

const login = async (req, res) => {
    try {
        let { email, password } = req.body;

        if (!email || !password){
            return res.status(StatusCodes.BAD_REQUEST).json({ message : "send proper data." });
        }

        let user = await User.findOne({ email: email });

        if (!user){
            return res.status(StatusCodes.NOT_FOUND).json({ message : "user not found." });
        }

        let match = await bcrypt.compare(password, user["password"]);
        if (match){
            let token = crypto.randomBytes(20).toString("hex");
            user.token = token;
            await user.save();
            return res.status(StatusCodes.OK).json({token:token});
        }else{
            return res.status(StatusCodes.BAD_REQUEST).json({ message : "Password was wrong." });
        }
    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(StatusCodes.BAD_REQUEST).json({ message: "Internal server error." });
    }

}

module.exports = { register , login };