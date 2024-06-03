import React, { useContext } from 'react';
import { CartContext } from '../Components/CartContext';
import { Link, NavLink } from 'react-router-dom';

const Cart = () => {
    const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);

    const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    if (!cartItems.length) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black text-xl">
                No items in the cart
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-lg max-w-6xl">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>
                <div className="flex space-x-6 overflow-x-auto pb-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex-shrink-0 w-64 bg-white text-gray-800 rounded-lg shadow-md overflow-hidden">
                            <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded-t-lg" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                                <p className="text-gray-400 mb-2">{item.description}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <button
                                            className="bg-gray-700 hover:bg-gray-600 text-white rounded-full px-3 py-1 mr-2"
                                            onClick={() => decrementQuantity(item.id)}
                                        >
                                            -
                                        </button>
                                        <span className="font-semibold">{item.quantity}</span>
                                        <button
                                            className="bg-gray-700 hover:bg-gray-600 text-white rounded-full px-3 py-1 ml-2"
                                            onClick={() => incrementQuantity(item.id)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <span className="font-semibold">Rs. {item.price * item.quantity}.00</span>
                                </div>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold mt-2"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 text-right">
                    <h2 className="text-2xl font-bold text-gray-800">Total: Rs. {totalAmount}.00</h2>
                    <button className="mt-5 bg-gradient-to-r from-black to-blue-700 hover:from-black hover:to-blue-700 text-white text-lg font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                        <NavLink to="/payment" className="w-full h-full flex justify-center items-center">
                            Checkout
                        </NavLink>
                    </button>
                </div>
                <div className="mt-8 text-center">
                    <Link to="/" className="text-blue-600 hover:underline text-lg font-semibold">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
