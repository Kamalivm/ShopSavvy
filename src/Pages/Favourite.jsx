// import React, { useContext, useState } from 'react';
// import { CartContext } from '../Components/CartContext'; // Import context
// import { Link, NavLink } from 'react-router-dom';
// import { CiShoppingCart, CiSearch, CiDeliveryTruck } from 'react-icons/ci';
// import { IoHeart } from 'react-icons/io5';
// import { FaUser } from 'react-icons/fa';
// import Data from '../Components/Data'
// const Favorite = () => {
//     const Products = {
//         groceryItems: Data.groceryItems || [],
//         fruitItems: Data.fruitItems || [],
//         vegetableItems: Data.vegetableItems || [],
//         stationaryItems: Data.stationaryItems || [],
//         householdItems: Data.householdItems || [],
//         bakeryItems: Data.bakeryItems || [],
//         kidsItems: Data.kidsItems || [],
//         sportsItems: Data.sportsItems || [],
//         bookItems: Data.bookItems || [],
//     };
//     const { favorites, toggleFavorite } = useContext(CartContext);
//     const [filteredProducts, setFilteredProducts] = useState(Products);
//         const [isDropdownVisible, setDropdownVisible] = useState(false);
//         const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('userToken')); // Example token check
    
//         const filterByCategory = (category) => {
//             if (category === 'All') {
//                 setFilteredProducts(Products);
//             } else if (Products[category]) {
//                 setFilteredProducts({
//                     [category]: Products[category],
//                 });
//             } else {
//                 console.error(`Category '${category}' does not exist.`);
//             }
//         };
    
//         const searchHandler = (e) => {
//             const searchQuery = e.target.value.toLowerCase();
//             if (!searchQuery) {
//                 setFilteredProducts(Products);
//                 return;
//             }
    
//             const filteredArray = {};
//             Object.keys(Products).forEach((category) => {
//                 filteredArray[category] = Products[category]
//                     ? Products[category].filter((item) =>
//                         item?.title?.toLowerCase().includes(searchQuery)
//                     )
//                     : [];
//             });
    
//             setFilteredProducts(filteredArray);
//         };
    
//         const toggleDropdown = () => {
//             setDropdownVisible(!isDropdownVisible);
//         };
    
//         const handleLoginLogout = () => {
//             if (isLoggedIn) {
//                 // Logout logic
//                 localStorage.removeItem('userToken');
//                 setIsLoggedIn(false);
//             } else {
//                 // Login logic (example redirection)
//                 window.location.href = '/login';
//             }
//         };

//     return (
//         <div className="w-full relative bg-gray-100">
//             <div className="sticky top-0 z-10">
//                 <div className="header flex justify-between items-center p-4 bg-white shadow-md">
//                     <h1 className="text-3xl font-bold">ShopSavvy</h1>
//                     <div className="flex items-center space-x-4">
//                         <NavLink to="/cart" className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
//                             <CiShoppingCart className="mr-2" size="1.5rem" />
//                             <span>Carts</span>
//                         </NavLink>
//                         <NavLink to="/favs" className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
//                             <IoHeart className="mr-2 text-red-500" size="1.5rem" />
//                             <span>Favourites</span>
//                         </NavLink>
//                         <NavLink to="/orders" className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
//                             <CiDeliveryTruck className="mr-2" size="1.5rem" />
//                             <span>Orders</span>
//                         </NavLink>
//                     </div>
//                     {/* Search Bar */}
//                     <div className="flex items-center space-x-2">
//                         <div className="search flex items-center px-5 py-2 bg-gray-200 rounded-lg shadow-sm">
//                             <input type="text" placeholder="Search product" className="bg-transparent outline-none w-full" onChange={searchHandler} />
//                                 <button onClick={searchHandler}>
//                                     <CiSearch size={20} />
//                                 </button>
//                         </div>
//                     </div>
                    
//                     <div className="relative">
//                         <button
//                             className="flex items-center justify-center bg-gray-700 text-center text-white px-3 py-3 rounded-full hover:bg-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
//                             onClick={toggleDropdown}
//                         >
//                             <FaUser size="1.2em" />
//                         </button>
//                         {isDropdownVisible && (
//                             <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-20">
//                                 <button
//                                     className="w-full px-4 py-2 text-left hover:bg-gray-200"
//                                     onClick={handleLoginLogout}
//                                 >
//                                     {isLoggedIn ? 'Logout' : 'Login'}
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//                 <div className="categories bg-white w-full flex justify-between space-x-5 px-4 py-3 shadow-md">
//                     {['All', 'groceryItems', 'fruitItems', 'vegetableItems', 'stationaryItems', 'householdItems', 'bakeryItems', 'kidsItems', 'sportsItems', 'bookItems'].map((category) => (
//                         <div
//                             key={category}
//                             className="px-5 py-2 hover:bg-black hover:text-white rounded-full transition-colors duration-300 cursor-pointer"
//                         >
//                             <button onClick={() => filterByCategory(category)}>
//                                 {category.charAt(0).toUpperCase() + category.slice(1).replace('Items', '')}
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {/* Favorite Content Section */}
//             <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-lg">
//                 <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Favorite Items</h1>
//                 <div className="products grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-6 p-6 z-20">
//                     {favorites.length > 0 ? (
//                         favorites.map((item) => (
//                             <div key={item.id} className="flex flex-col bg-white text-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg">
//                                 <Link to={`/product/${item.id}`} className="block">
//                                     <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
//                                     <div className="p-4">
//                                         <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
//                                         <p className="text-gray-500 mb-4">{item.description}</p>
//                                     </div>
//                                 </Link>
//                                 <div className="p-4 flex flex-col justify-between flex-grow">
//                                     <div className="flex items-center justify-between">
//                                         <span className="font-semibold">Rs. {item.price}.00</span>
//                                     </div>
//                                     <button
//                                         className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold mt-4"
//                                         onClick={() => toggleFavorite(item)} // Toggle favorite
//                                     >
//                                         {favorites.some((favs) => favs.id === item.id) ? 'Remove from Favorites' : 'Add to Favorites'}
//                                     </button>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No favorite items yet!</p>
//                     )}
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

// export default Favorite;


import { useContext, useState } from 'react'; // Removed React import as it's not necessary
import { CartContext } from '../Components/CartContext';
import { Link, NavLink } from 'react-router-dom';
import { CiShoppingCart, CiSearch, CiDeliveryTruck } from 'react-icons/ci';
import { IoHeart } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import Data from '../Components/Data';

const Favorite = () => {
    const Products = {
        groceryItems: Data.groceryItems || [],
        fruitItems: Data.fruitItems || [],
        vegetableItems: Data.vegetableItems || [],
        stationaryItems: Data.stationaryItems || [],
        householdItems: Data.householdItems || [],
        bakeryItems: Data.bakeryItems || [],
        kidsItems: Data.kidsItems || [],
        sportsItems: Data.sportsItems || [],
        bookItems: Data.bookItems || [],
    };

    const { favorites, toggleFavorite } = useContext(CartContext);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('userToken')); // Example token check
    const [filteredProducts, setFilteredProducts] = useState(Products); // Added state for filtered products

    const filterByCategory = (category) => {
        if (category === 'All') {
            setFilteredProducts(Products);
        } else if (Products[category]) {
            setFilteredProducts({
                [category]: Products[category],
            });
        } else {
            console.error(`Category '${category}' does not exist.`);
        }
    };

    const searchHandler = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        if (!searchQuery) {
            setFilteredProducts(Products);
            return;
        }

        const filteredArray = {};
        Object.keys(Products).forEach((category) => {
            filteredArray[category] = Products[category]
                ? Products[category].filter((item) =>
                    item?.title?.toLowerCase().includes(searchQuery)
                )
                : [];
        });

        setFilteredProducts(filteredArray);
    };

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const handleLoginLogout = () => {
        if (isLoggedIn) {
            // Logout logic
            localStorage.removeItem('userToken');
            setIsLoggedIn(false);
        } else {
            // Login logic (example redirection)
            window.location.href = '/login';
        }
    };

    return (
        <div className="w-full relative bg-gray-100">
            <div className="sticky top-0 z-10">
                <div className="header flex justify-between items-center p-4 bg-white shadow-md">
                    <h1 className="text-3xl font-bold">ShopSavvy</h1>
                    <div className="flex items-center space-x-4">
                        <NavLink to="/cart" className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
                            <CiShoppingCart className="mr-2" size="1.5rem" />
                            <span>Carts</span>
                        </NavLink>
                        <NavLink to="/favs" className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
                            <IoHeart className="mr-2 text-red-500" size="1.5rem" />
                            <span>Favourites</span>
                        </NavLink>
                        <NavLink to="/orders" className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
                            <CiDeliveryTruck className="mr-2" size="1.5rem" />
                            <span>Orders</span>
                        </NavLink>
                    </div>
                    {/* Search Bar */}
                    <div className="flex items-center space-x-2">
                        <div className="search flex items-center px-5 py-2 bg-gray-200 rounded-lg shadow-sm">
                            <input type="text" placeholder="Search product" className="bg-transparent outline-none w-full" onChange={searchHandler} />
                                <button onClick={searchHandler}>
                                    <CiSearch size={20} />
                                </button>
                        </div>
                    </div>
                    
                    <div className="relative">
                        <button
                            className="flex items-center justify-center bg-gray-700 text-center text-white px-3 py-3 rounded-full hover:bg-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
                            onClick={toggleDropdown}
                        >
                            <FaUser size="1.2em" />
                        </button>
                        {isDropdownVisible && (
                            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-20">
                                <button
                                    className="w-full px-4 py-2 text-left hover:bg-gray-200"
                                    onClick={handleLoginLogout}
                                >
                                    {isLoggedIn ? 'Logout' : 'Login'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="categories bg-white w-full flex justify-between space-x-5 px-4 py-3 shadow-md">
                    {['All', 'groceryItems', 'fruitItems', 'vegetableItems', 'stationaryItems', 'householdItems', 'bakeryItems', 'kidsItems', 'sportsItems', 'bookItems'].map((category) => (
                        <div
                            key={category}
                            className="px-5 py-2 hover:bg-black hover:text-white rounded-full transition-colors duration-300 cursor-pointer"
                        >
                            <button onClick={() => filterByCategory(category)}>
                                {category.charAt(0).toUpperCase() + category.slice(1).replace('Items', '')}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            {/* Favorite Content Section */}
            <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Favorite Items</h1>
                <div className="products grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-6 p-6 z-20">
                    {Object.keys(filteredProducts).length > 0 ? (
                        Object.keys(filteredProducts).map((category) => 
                            filteredProducts[category].map((item) => (
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
                                            <span className="font-semibold">Rs. {item.price}.00</span>
                                        </div>
                                        <button
                                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold mt-4"
                                            onClick={() => toggleFavorite(item)} // Toggle favorite
                                        >
                                            {favorites.some((favs) => favs.id === item.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                                        </button>
                                    </div>
                                </div>
                            ))
                        )
                    ) : (
                        <p>No favorite items yet!</p>
                    )}
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

export default Favorite;
