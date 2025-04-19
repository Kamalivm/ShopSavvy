import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CiShoppingCart, CiSearch, CiDeliveryTruck } from 'react-icons/ci';
import { IoHeart } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';

const Header = ({ searchHandler, handleLogout, filterByCategory }) => {
    const categories = [
        'All',
        'groceryItems',
        'fruitItems',
        'vegetableItems',
        'stationaryItems',
        'householdItems',
        'bakeryItems',
        'kidsItems',
        'sportsItems',
        'bookItems',
    ];

    return (
        <div className="sticky top-0 z-10">
            {/* Header Section */}
            <div className="header flex justify-between items-center p-4 bg-white shadow-md">
                <h1 className="text-3xl font-bold">
                    <NavLink to="/" className="hover:text-gray-600 transition">
                        ShopSavvy
                    </NavLink>
                </h1>
                <div className="flex items-center space-x-4">
                    {/* Cart Link */}
                    <Link
                        to="/cart"
                        className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <CiShoppingCart size="1.5rem" />
                        <span className="ml-2">Cart</span>
                    </Link>

                    {/* Favorites Link */}
                    <Link
                        to="/favs"
                        className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <IoHeart size="1.5rem" className="text-red-500" />
                        <span className="ml-2">Favorites</span>
                    </Link>

                    {/* Orders Link */}
                    <Link
                        to="/orders"
                        className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <CiDeliveryTruck size="1.5rem" />
                        <span className="ml-2">Orders</span>
                    </Link>
                </div>

                {/* Search Bar */}
                <div className="flex items-center space-x-2">
                    <div className="search flex items-center px-5 py-2 bg-gray-200 rounded-lg shadow-sm">
                        <input
                            type="text"
                            placeholder="Search product"
                            className="bg-transparent outline-none w-full"
                            onChange={searchHandler}
                        />
                        <button>
                            <CiSearch size={20} />
                        </button>
                    </div>

                    {/* User Profile / Logout */}
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
                <button
                    key={category}
                    onClick={() => filterByCategory(category)}
                    className="px-5 py-2 hover:bg-black hover:text-white rounded-full transition-colors duration-300 cursor-pointer"
                >
                {category === 'All'
                    ? 'All'
                    : category.charAt(0).toUpperCase() + category.slice(1).replace('Items', '')}
                    </button>
                ))}
            </div>

        </div>
    );
};

export default Header;