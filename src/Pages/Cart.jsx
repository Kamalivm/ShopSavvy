// import React, { useContext, useState, useMemo } from 'react';
// import { CartContext } from '../Components/CartContext';
// import { Link } from 'react-router-dom';
// import { CiShoppingCart, CiSearch, CiDeliveryTruck } from 'react-icons/ci';
// import { IoHeart } from 'react-icons/io5';
// import { FaUser } from 'react-icons/fa';
// import { FiPlusCircle } from 'react-icons/fi';

// const Cart = () => {
//     const { cartItems, removeFromCart, incrementQuantity, decrementQuantity, updateTotalAmount } = useContext(CartContext);
//     const [searchTerm, setSearchTerm] = useState("");

//     // Filter cart items based on search term
//     const filteredItems = cartItems.filter(item =>
//         item.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     // Use useMemo to optimize total amount calculation
//     const totalAmount = useMemo(() => {
//         return filteredItems.reduce((total, item) => total + (item.price * item.quantity), 0);
//     }, [filteredItems]);

//     const handleLogout = () => {
//         localStorage.clear();
//         window.location.href = '/'; // Redirect to the home page after logout
//     };

//     const searchHandler = (e) => {
//         setSearchTerm(e.target.value); // Update the search term
//     };

//     return (
//         <div className="w-full relative bg-gray-100">
//             {/* Header Section */}
//             <div className="sticky top-0 z-10">
//                 <div className="header flex justify-between items-center p-4 bg-white shadow-md">
//                     <h1 className="text-3xl font-bold">ShopSavvy</h1>
//                     <div className="flex items-center space-x-4">
//                         {/* Cart Link */}
//                         <Link to="/cart" className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
//                             <CiShoppingCart size={'1.5rem'} />
//                             <span className="ml-2">Carts</span>
//                         </Link>

//                         {/* Favorites Link */}
//                         <Link to="/favs" className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
//                             <IoHeart size={'1.5rem'} className="text-red-500" />
//                             <span className="ml-2">Favorites</span>
//                         </Link>

//                         {/* Orders Link */}
//                         <Link to="/orders" className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
//                             <CiDeliveryTruck size={'1.5rem'} />
//                             <span className="ml-2">Orders</span>
//                         </Link>
//                     </div>

//                     {/* Search Bar */}
//                     <div className="flex items-center space-x-2">
//                         <div className="search flex items-center px-5 py-2 bg-gray-200 rounded-lg shadow-sm">
//                             <input type="text" placeholder="Search product" className="bg-transparent outline-none w-full" onChange={searchHandler} />
//                             <button onClick={searchHandler}>
//                                 <CiSearch size={20} />
//                             </button>
//                         </div>

//                         {/* User Profile / Logout */}
//                         <button
//                             className="flex items-center justify-center bg-gray-700 text-white px-3 py-3 rounded-full hover:bg-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
//                             onClick={handleLogout}
//                         >
//                             <FaUser size="1.2em" />
//                         </button>
//                     </div>
//                 </div>

//                 {/* Categories Section */}
//                 <div className="categories bg-white w-full flex justify-between space-x-5 px-4 py-3 shadow-md">
//                     {['All', 'groceryItems', 'fruitItems', 'vegetableItems', 'stationaryItems', 'householdItems', 'bakeryItems', 'kidsItems', 'sportsItems', 'bookItems'].map((category) => (
//                         <div key={category} className="px-5 py-2 hover:bg-black hover:text-white rounded-full transition-colors duration-300 cursor-pointer">
//                             <button>
//                                 {category.charAt(0).toUpperCase() + category.slice(1).replace('Items', '')}
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Cart Content Section */}
//             <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-lg">
//                 <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>
//                 <div className="products grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-6 p-6 z-20">
//                     {filteredItems.map((item) => (
//                         <div key={item.id} className="flex flex-col bg-white text-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg">
//                             <Link to={`/product/${item.id}`} className="block">
//                                 <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
//                                 <div className="p-4">
//                                     <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
//                                     <p className="text-gray-500 mb-4">{item.description}</p>
//                                 </div>
//                             </Link>
//                             <div className="p-4 flex flex-col justify-between flex-grow">
//                                 <div className="flex items-center justify-between">
//                                     <div className="flex items-center">
//                                         <button
//                                             className="bg-gray-700 hover:bg-gray-600 text-white rounded-full px-3 py-1 mr-2"
//                                             onClick={(e) => {
//                                                 e.preventDefault();
//                                                 decrementQuantity(item.id);
//                                             }}
//                                         >
//                                             -
//                                         </button>
//                                         <span className="font-semibold">{item.quantity}</span>
//                                         <button
//                                             className="bg-gray-700 hover:bg-gray-600 text-white rounded-full px-3 py-1 ml-2"
//                                             onClick={(e) => {
//                                                 e.preventDefault();
//                                                 incrementQuantity(item.id);
//                                             }}
//                                         >
//                                             +
//                                         </button>
//                                     </div>
//                                     <span className="font-semibold">Rs. {item.price * item.quantity}.00</span>
//                                 </div>
//                                 <button
//                                     className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold mt-4"
//                                     onClick={(e) => {
//                                         e.preventDefault();
//                                         removeFromCart(item.id);
//                                     }}
//                                 >
//                                     Remove
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="mt-8 text-right">
//                     <h2 className="text-2xl font-bold text-gray-800">Total: Rs. {totalAmount}.00</h2>
//                     <Link
//                         to="/payment"
//                         onClick={() => updateTotalAmount(totalAmount)} // Update totalAmount in context before navigation
//                         className="mt-5 inline-block bg-gradient-to-r from-gray-700 to-gray-800 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
//                     >
//                         Checkout
//                     </Link>
//                 </div>
//                 <div className="mt-8 text-center">
//                     <Link to="/" className="text-blue-600 hover:underline text-lg font-semibold">
//                         Continue Shopping
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Cart;


import { useContext, useState, useMemo } from 'react';
import { CartContext } from '../Components/CartContext';
import { Link } from 'react-router-dom';
import { CiShoppingCart, CiSearch, CiDeliveryTruck } from 'react-icons/ci';
import { IoHeart } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';

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
        setSearchTerm(e.target.value);
    };

    return (
        <div className="w-full relative bg-gray-100">
            {/* Header Section */}
            <div className="sticky top-0 z-10">
                <div className="header flex justify-between items-center p-4 bg-white shadow-md">
                    <h1 className="text-3xl font-bold">ShopSavvy</h1>
                    <div className="flex items-center space-x-4">
                        <Link to="/cart" className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
                            <CiShoppingCart size={'1.5rem'} />
                            <span className="ml-2">Carts</span>
                        </Link>
                        <Link to="/favs" className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
                            <IoHeart size={'1.5rem'} className="text-red-500" />
                            <span className="ml-2">Favorites</span>
                        </Link>
                        <Link to="/orders" className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
                            <CiDeliveryTruck size={'1.5rem'} />
                            <span className="ml-2">Orders</span>
                        </Link>
                    </div>

                    {/* Search Bar */}
                    <div className="flex items-center space-x-2">
                        <div className="search flex items-center px-5 py-2 bg-gray-200 rounded-lg shadow-sm">
                            <input type="text" placeholder="Search product" className="bg-transparent outline-none w-full" onChange={searchHandler} />
                            <button onClick={searchHandler}>
                                <CiSearch size={20} />
                            </button>
                        </div>
                        <button
                            className="flex items-center justify-center bg-gray-700 text-white px-3 py-3 rounded-full hover:bg-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
                            onClick={handleLogout}
                        >
                            <FaUser size="1.2em" />
                        </button>
                    </div>
                </div>

                {/* Categories Section */}
                <div className="categories bg-white w-full flex justify-between space-x-5 px-4 py-3 shadow-md">
                    {['All', 'groceryItems', 'fruitItems', 'vegetableItems', 'stationaryItems', 'householdItems', 'bakeryItems', 'kidsItems', 'sportsItems', 'bookItems'].map((category) => (
                        <div key={category} className="px-5 py-2 hover:bg-black hover:text-white rounded-full transition-colors duration-300 cursor-pointer">
                            <button>
                                {category.charAt(0).toUpperCase() + category.slice(1).replace('Items', '')}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

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
                        onClick={() => updateTotalAmount(totalAmount)}
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
