const mongoose = require('mongoose');
const Cart = require('../Models/cartModels');

exports.addToCart = async (req, res) => {
    const { img, title, price, description, quantity = 1 } = req.body;
    const userId = req.user._id;
    const productIdParam = req.params.productId;

    console.log("Route productId param:", productIdParam);
    console.log("Type of productIdParam:", typeof productIdParam);

    if (!productIdParam || !mongoose.Types.ObjectId.isValid(productIdParam)) {
        return res.status(400).json({ error: "Invalid or missing productId" });
    }

    // Explicitly convert to ObjectId
    const productId = new mongoose.Types.ObjectId(productIdParam);

    try {
        let cart = await Cart.findOne({ userId });

        const itemToAdd = {
            productId: productId,
            img,
            title,
            price,
            description,
            quantity,
        };

        console.log("Item to add:", itemToAdd); // Debug what's about to be saved

        if (!cart) {
            cart = new Cart({
                userId,
                items: [itemToAdd],
                totalAmount: price * quantity,
            });
        } else {
            const existingItemIndex = cart.items.findIndex(
                item => item.productId?.toString() === productId.toString()
            );

            if (existingItemIndex > -1) {
                cart.items[existingItemIndex].quantity += quantity;
            } else {
                cart.items.push(itemToAdd);
            }

            cart.totalAmount = cart.items.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
            );
        }

        await cart.save();

        res.status(200).json({ message: "Cart updated successfully", cart });
    } catch (error) {
        console.error("Cart error:", error);
        res.status(500).json({ error: "Failed to add to cart" });
    }
};

exports.getCartItems = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user._id }).populate('items.productId');  // Populate productId if needed

        if (!cart) return res.status(200).json({ items: [], totalAmount: 0 });
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ error: "Error fetching cart" });
    }
};

exports.removeFromCart = async (req, res) => {
    try {
        const { productId } = req.params;
        const cart = await Cart.findOne({ userId: req.user._id });

        if (!cart) return res.status(404).json({ message: "Cart not found" });

        // Remove the item from the cart
        cart.items = cart.items.filter(item => item.productId.toString() !== productId);

        // Recalculate the totalAmount
        cart.totalAmount = cart.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

        await cart.save();
        res.status(200).json({ message: "Item removed", cart });
    } catch (err) {
        res.status(500).json({ error: "Error removing item from cart" });
    }
};

exports.updateCartItem = async (req, res) => {
    try {
        const { productId } = req.params;
        const { quantity } = req.body;
        const cart = await Cart.findOne({ userId: req.user._id });

        if (!cart) return res.status(404).json({ message: "Cart not found" });

        const item = cart.items.find(item => item.productId.toString() === productId);
        if (!item) return res.status(404).json({ message: "Item not found" });

        // Update the quantity
        item.quantity = quantity;

        // Recalculate the totalAmount
        cart.totalAmount = cart.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

        await cart.save();
        res.status(200).json({ message: "Quantity updated", cart });
    } catch (err) {
        res.status(500).json({ error: "Error updating item quantity" });
    }
};
