import React, { useContext, useState, useMemo } from 'react';
import { CartContext } from '../Components/CartContext';
import { Link } from 'react-router-dom';
import { CiShoppingCart, CiSearch, CiDeliveryTruck } from 'react-icons/ci';
import { IoHeart } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { FiPlusCircle } from 'react-icons/fi';
import Header from '../Components/Header';

const Cart = () => {
    const { cartItems, removeFromCart, incrementQuantity, decrementQuantity, updateTotalAmount } = useContext(CartContext);
    const [searchTerm, setSearchTerm] = useState("");

    // Filter cart items based on search term
    const filteredItems = cartItems.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Use useMemo to optimize total amount calculation
    const totalAmount = useMemo(() => {
        return filteredItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }, [filteredItems]);

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/'; // Redirect to the home page after logout
    };

    const searchHandler = (e) => {
        setSearchTerm(e.target.value); // Update the search term
    };

    return (
        <div className="w-full relative bg-gray-100">
            <Header/>

            {/* Cart Content Section */}
            <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>
                <div className="products grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-6 p-6 z-20">
                    {filteredItems.map((item) => (
                        <div key={item.id} className="flex flex-col bg-white text-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg">
                            <Link to={`/product/${item.id}`} className="block">
                                <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                                    <p className="text-gray-500 mb-4">{item.description}</p>
                                </div>
                            </Link>
                            <div className="p-4 flex flex-col justify-between flex-grow">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <button
                                            className="bg-gray-700 hover:bg-gray-600 text-white rounded-full px-3 py-1 mr-2"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                decrementQuantity(item.id);
                                            }}
                                        >
                                            -
                                        </button>
                                        <span className="font-semibold">{item.quantity}</span>
                                        <button
                                            className="bg-gray-700 hover:bg-gray-600 text-white rounded-full px-3 py-1 ml-2"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                incrementQuantity(item.id);
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <span className="font-semibold">Rs. {item.price * item.quantity}.00</span>
                                </div>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold mt-4"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        removeFromCart(item.id);
                                    }}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 text-right">
                    <h2 className="text-2xl font-bold text-gray-800">Total: Rs. {totalAmount}.00</h2>
                    <Link
                        to="/payment"
                        onClick={() => updateTotalAmount(totalAmount)} // Update totalAmount in context before navigation
                        className="mt-5 inline-block bg-gradient-to-r from-gray-700 to-gray-800 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Checkout
                    </Link>
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
