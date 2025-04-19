const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser,
    getUserProfile,
    getAllUsers,
    updateUserProfile,
    deleteUser,
    updateUserRole,
    updateUserPassword
} = require("../Controllers/userController");
const { authMiddleware, adminMiddleware } = require("../Middlewares/authMiddleware");

// Public Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected Routes (User)
router.get("/profile", authMiddleware, getUserProfile);
router.put("/profile", authMiddleware, updateUserProfile);
router.put("/password", authMiddleware, updateUserPassword);
router.delete("/:id", authMiddleware, deleteUser);

// Admin Routes
router.get("/", authMiddleware, adminMiddleware, getAllUsers);
router.put("/role/:id", authMiddleware, adminMiddleware, updateUserRole);

module.exports = router;
