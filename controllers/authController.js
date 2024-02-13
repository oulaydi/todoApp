const User = require("../models/userModle");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const signup = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.create({ username, password });
        jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });
        res.status(201).json({
            message:
                "Your Account has been successfully Created!\n /login to list you todos!",
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res
                .status(401)
                .json({ message: "Incorrect username or password" });
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });
        res.json({ token });
    } catch (err) {
        res.status(500).json({
            message: "Oops!! Incorrect username or password",
        });
    }
};

module.exports = { login, signup };
