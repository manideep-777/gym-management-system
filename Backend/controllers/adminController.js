const Admin = require("../models/admin_model.js");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
    // console.log(req.session);
    try {
        let { username, email, password } = req.body;

       console.log(username,email,password)

        const newAdmin = new Admin({ username, email });
        const registeredAdmin = await Admin.register(newAdmin, password);
        console.log(registeredAdmin);

        return res.status(StatusCodes.CREATED).json({ message: "Admin successfully registered.", user: registeredAdmin });
    } catch (err) {
        console.error("Error during registration:", err);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Internal server error.", error : err });
    }
}

const login = async (req,res) => {
    try {
        // let {  email, password } = req.body;

        return res.status(StatusCodes.CREATED).json({ message: "Admin logged successfully.", user: req.user });
    } catch (err) {
        console.error("Error during registration:", err);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Internal server error.", error : err });
    }
}

const logout = (req,res) => {
    req.logout((err)=>{
        if(err){
            console.error("Error during logout:", err);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Internal server error.", error : err });
        }
        return res.status(StatusCodes.CREATED).json({ message: "Admin logout." });
    });
}

module.exports = { register, login, logout };