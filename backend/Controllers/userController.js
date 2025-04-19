const User = require("../Models/userModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Register User
const registerUser = async (req, res) => {
    const { name, phone, email, password, role } = req.body;

    try {

        const validRoles = ["User", "Admin"];
        if (!validRoles.includes(role)) {
            return res.status(400).json({ message: `Invalid role: ${role}` });
        }

        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "User already exists" });

        // 🔹 Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, phone, email, password: hashedPassword, role });

        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Login User/Admin
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid email or password" });

        // 🔹 Compare hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

        // 🔹 Generate JWT token
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.json({ token, role: user.role, message: "Login successful" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get User Profile (Protected Route)
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Users (Admin Protected Route)
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update User Profile (Protected Route)
const updateUserProfile = async (req, res) => {
    try {
        let updates = { ...req.body };

        if (req.body.password) {
            // 🔹 Hash new password before updating
            updates.password = await bcrypt.hash(req.body.password, 10);
        }

        const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete User (Admin & User Protected Route)
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params; // ID from request params
        const userId = req.user.id; // ID from authenticated user
        const userRole = req.user.role; // User role from token

        if (userRole === "admin") {
            await User.findByIdAndDelete(id);
            return res.json({ message: "Admin deleted successfully by admin" });
        }

        if (id !== userId) {
            return res.status(403).json({ message: "Access denied: You can only delete your own account" });
        }

        await User.findByIdAndDelete(userId);
        res.json({ message: "Your account has been deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update User Role (Admin Protected Route)
const updateUserRole = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { role: req.body.role }, { new: true });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update User Password (Protected Route)
const updateUserPassword = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        // 🔹 Check if the old password is correct
        const isMatch = await bcrypt.compare(req.body.oldPassword, user.password);
        if (!isMatch) return res.status(400).json({ message: "Old password is incorrect" });

        // 🔹 Hash new password before saving
        user.password = await bcrypt.hash(req.body.newPassword, 10);
        await user.save();

        res.json({ message: "Password updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    registerUser,
    loginUser,
    getUserProfile,
    getAllUsers,
    updateUserProfile,
    deleteUser,
    updateUserRole,
    updateUserPassword
};
