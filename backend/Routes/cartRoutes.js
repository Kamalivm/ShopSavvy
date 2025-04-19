const express = require("express");
const router = express.Router();
const { addToCart, getCartItems, removeFromCart, updateCartItem } = require("../Controllers/cartController");
const { authMiddleware } = require("../Middlewares/authMiddleware");

router.post("/add/:productId", authMiddleware, addToCart);
router.get("/:userId", authMiddleware, getCartItems);
router.delete("/remove/:productId", authMiddleware, removeFromCart);
router.put("/update/:productId", authMiddleware, updateCartItem);

module.exports = router;
