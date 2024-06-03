import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoHeart } from 'react-icons/io5';
import { CiShoppingCart, CiDeliveryTruck } from 'react-icons/ci';
import { Link , NavLink } from 'react-router-dom';
import Data from './Data.jsx';

const Main = () => {
    const Products = {
        groceryItems: Data.groceryItems,
        fruitItems: Data.fruitItems,
        vegetableItems: Data.vegetableItems,
        stationaryItems: Data.stationaryItems,
        householdItems: Data.householdItems,
        bakeryItems: Data.bakeryItems,
        kidsItems: Data.kidsItems,
        sportsItems: Data.sportsItems,
        bookItems: Data.bookItems,
    };

    const [filteredProducts, setFilteredProducts] = useState(Products);

    const filterByCategory = (category) => {
        if (category === 'All') {
            setFilteredProducts(Products);
        } else if (Products.hasOwnProperty(category)) {
            setFilteredProducts({
                ...Products,
                groceryItems: category === 'groceryItems' ? Products.groceryItems : [],
                fruitItems: category === 'fruitItems' ? Products.fruitItems : [],
                vegetableItems: category === 'vegetableItems' ? Products.vegetableItems : [],
                stationaryItems: category === 'stationaryItems' ? Products.stationaryItems : [],
                householdItems: category === 'householdItems' ? Products.householdItems : [],
                bakeryItems: category === 'bakeryItems' ? Products.bakeryItems : [],
                kidsItems: category === 'kidsItems' ? Products.kidsItems : [],
                sportsItems: category === 'sportsItems' ? Products.sportsItems : [],
                bookItems: category === 'bookItems' ? Products.bookItems : [],
            });
        } else {
            console.error(`Category '${category}' does not exist.`);
        }
    };

    const searchHandler = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        const filteredArray = {
            groceryItems: Data.groceryItems.filter((item) =>
                item.title.toLowerCase().includes(searchQuery)
            ),
            fruitItems: Data.fruitItems.filter((item) =>
                item.title.toLowerCase().includes(searchQuery)
            ),
            vegetableItems: Data.vegetableItems.filter((item) =>
                item.title.toLowerCase().includes(searchQuery)
            ),
            stationaryItems: Data.stationaryItems.filter((item) =>
                item.title.toLowerCase().includes(searchQuery)
            ),
            householdItems: Data.householdItems.filter((item) =>
                item.title.toLowerCase().includes(searchQuery)
            ),
            bakeryItems: Data.bakeryItems.filter((item) =>
                item.title.toLowerCase().includes(searchQuery)
            ),
            kidsItems: Data.kidsItems.filter((item) =>
                item.title.toLowerCase().includes(searchQuery)
            ),
            sportsItems: Data.sportsItems.filter((item) =>
                item.title.toLowerCase().includes(searchQuery)
            ),
            bookItems: Data.bookItems.filter((item) =>
                item.title.toLowerCase().includes(searchQuery)
            )
        };
        setFilteredProducts(filteredArray);
    };

    return (
        <div className='w-full relative bg-gray-100'>
            <div className='sticky top-0 z-10'>
                <div className='header flex justify-between items-center p-4 bg-white shadow-md'>
                    <h1 className='text-3xl font-bold'>ShopSavvy</h1>
                    <div className="flex items-center space-x-4">
                            <NavLink to='/cart' className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
                                <CiShoppingCart className="mr-2" size={'1.5rem'} />
                                <span className="text-white">CartItems</span>
                            </NavLink>
                            <NavLink to='/favs' className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
                                <IoHeart className="mr-2 text-red-500" size={'1.5rem'} />
                                <span className="text-white">FavouriteItems</span>
                            </NavLink>
                            <NavLink to='/orders' className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
                                <CiDeliveryTruck className="mr-2" size={'1.5rem'} />
                                <span className="text-white">OrderItems</span>
                            </NavLink>
                        </div>
                    <div className="search flex items-center px-5 py-2 bg-gray-200 rounded-lg shadow-sm">
                        <input type="text" placeholder='Search product' className='bg-transparent outline-none w-full' onChange={searchHandler} />
                        <button onClick={searchHandler}><CiSearch size={20} /></button>
                    </div>
                </div>
                <div className="categories bg-white w-full flex justify-between space-x-5 px-4 py-3 shadow-md">
                    {['All', 'groceryItems', 'fruitItems', 'vegetableItems', 'stationaryItems', 'householdItems', 'bakeryItems', 'kidsItems', 'sportsItems', 'bookItems'].map((category) => (
                        <div key={category} className='px-5 py-2 hover:bg-black hover:text-white rounded-full transition-colors duration-300 cursor-pointer'>
                            <button onClick={() => filterByCategory(category)}>
                                {category.charAt(0).toUpperCase() + category.slice(1).replace('Items', '')}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-6 p-6 z-20">
                {Object.values(filteredProducts).flat().map((item) => (
                    <Link to={`/product/${item.id}`} key={item.id} className="group">
                        <div className="product flex flex-col justify-between h-[350px] bg-white shadow-lg p-4 rounded-lg border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50 hover:border-blue-400">
                            <img src={item.img} className='w-full h-[60%] object-cover rounded-t-lg' />
                            <div className='flex flex-col justify-between flex-grow p-2'>
                                <h1 className='text-lg font-semibold mb-1 group-hover:text-blue-600'>{item.title}</h1>
                                <p className='text-sm text-gray-600 mb-2'>{item.description}</p>
                                <div className='flex justify-between items-center'>
                                    <p className='text-xl font-bold text-gray-800'>Rs. {item.price}.00</p>
                                    {/* <button><IoHeart color={'red'} size={'1.4rem'} /></button> */}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Main;