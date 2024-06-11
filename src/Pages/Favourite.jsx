import React from 'react';
import { Link } from 'react-router-dom';
import { IoHeart } from 'react-icons/io5';

const Favorite = () => {
    const [favorites, setFavorites] = React.useState(JSON.parse(localStorage.getItem('favorites')) || []);

    const handleRemoveFavorite = (id) => {
        const updatedFavorites = favorites.filter(item => item.id !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return (
        <div className='w-full relative bg-gray-100 p-6'>
            <h1 className='text-3xl font-bold mb-4'>Favorite Items</h1>
            <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-6">
                {favorites.map((item) => (
                    <div key={item.id} className="relative">
                        <Link to={`/product/${item.id}`}>
                            <div className="product flex flex-col justify-between h-[350px] bg-white shadow-lg p-4 rounded-lg border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50 hover:border-blue-400">
                                <img src={item.img} className='w-full h-[60%] object-cover rounded-t-lg' />
                                <div className='flex flex-col justify-between flex-grow p-2'>
                                    <h1 className='text-lg font-semibold mb-1'>{item.title}</h1>
                                    <p className='text-sm text-gray-600 mb-2'>{item.description}</p>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-xl font-bold text-gray-800'>Rs. {item.price}.00</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <button
                            className="absolute top-2 right-2 text-red-600 bg-white rounded-full p-1 shadow-md transition-colors duration-300 hover:bg-red-100"
                            onClick={() => handleRemoveFavorite(item.id)}
                        >
                            <IoHeart size="1.5rem" />
                        </button>
                    </div>
                ))}
            </div>
            <div className="mt-8 text-center">
                    <Link to="/" className="text-blue-600 hover:underline text-lg font-semibold">
                        Continue Shopping
                    </Link>
                </div>
                
        </div>
    );
};

export default Favorite;
