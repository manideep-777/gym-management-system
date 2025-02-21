const Admin = require("../models/admin_model.js");
const { StatusCodes } = require("http-status-codes");
const User = require("../models/user_model.js");

const register = async (req, res) => {
    // console.log(req.session);
    try {
        let { username, email, password } = req.body;

        console.log(username, email, password)

        const newAdmin = new Admin({ username, email });
        const registeredAdmin = await Admin.register(newAdmin, password);
        console.log(registeredAdmin);

        return res.status(StatusCodes.CREATED).json({ message: "Admin successfully registered.", user: registeredAdmin });
    } catch (err) {
        console.error("Error during registration:", err);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Internal server error.", error: err });
    }
}

const login = async (req, res) => {
    try {
        // let {  email, password } = req.body;

        return res.status(StatusCodes.CREATED).json({ message: "Admin logged successfully.", user: req.user });
    } catch (err) {
        console.error("Error during registration:", err);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Internal server error.", error: err });
    }
}

const logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error("Error during logout:", err);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Internal server error.", error: err });
        }
        return res.status(StatusCodes.CREATED).json({ message: "Admin logout." });
    });
}

const memberData = async (req, res) => {
    try {
        const users = await User.find({ membership: true });
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Error fetching users" });
    }
}

const memberDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully", user: deletedUser });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const updateBills = async (req, res) => {
    try {
        const { id } = req.params; 
        const { billingPeriod, amount, paymentStatus } = req.body; 
        // console.log(id, req.body)

        const user = await User.findById(id);
        if (!user) return res.status(404).json({ error: "User not found" });

        const newBill = { billingPeriod, amount, paymentStatus: paymentStatus || "Pending" };
        user.bills.push(newBill);

        await user.save();
        res.status(200).json({ message: "Bill added successfully", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const findedMember = async (req, res) => {
    try {
        const { id } = req.params; 

        const user = await User.findById(id);
        if (!user) return res.status(404).json({ error: "User not found" });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { register, login, logout, memberData, memberDelete, updateBills, findedMember };