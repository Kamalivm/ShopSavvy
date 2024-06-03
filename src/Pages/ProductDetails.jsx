import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import Data from '../Components/Data.jsx';
import { CartContext } from '../Components/CartContext';
import { IoCheckmarkCircle, IoHeartOutline, IoHeart } from 'react-icons/io5';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useContext(CartContext);
    const [notification, setNotification] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [review, setReview] = useState('');
    const [reviews, setReviews] = useState([]);

    const findProductById = (id) => {
        for (const category in Data) {
            const foundProduct = Data[category]?.find(item => item.id === parseInt(id));
            if (foundProduct) {
                return { category, product: foundProduct };
            }
        }
        return null;
    };

    useEffect(() => {
        const result = findProductById(id);
        if (result) {
            setProduct(result.product);
            setIsFavorite(localStorage.getItem(`favorite_${id}`) === 'true');
            setReviews(result.product.reviews || []);
        }
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleAddToCart = (product) => {
        addToCart(product);
        setNotification(true);
        setTimeout(() => {
            setNotification(false);
        }, 3000);
    };

    const handleToggleFavorite = () => {
        setIsFavorite(!isFavorite);
        localStorage.setItem(`favorite_${id}`, !isFavorite);
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            user: "Anonymous",
            comment: review,
        };
        setReviews([...reviews, newReview]);
        setReview('');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {notification && (
                <div className='absolute top-5 right-5 bg-black text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 transition-opacity duration-300 opacity-100'>
                    <IoCheckmarkCircle size="1.5rem" />
                    <span>Product successfully added to cart!</span>
                </div>
            )}
            <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-lg max-w-4xl">
                <div className="flex flex-col md:flex-row md:space-x-6 items-center">
                    <div className="w-full md:w-1/2 relative">
                        <img 
                            src={product.img} 
                            alt={product.title} 
                            className="object-cover w-full h-80 rounded-lg shadow-md transition-transform transform hover:scale-105"
                        />
                        <div className="mt-5">
                            <button 
                                onClick={handleToggleFavorite}
                                className={`text-gray-500 hover:text-red-500 focus:outline-none ${isFavorite ? 'text-red-500' : ''}`}
                            >
                                {isFavorite ? <IoHeart size="2rem" color="#ff4d4f" /> : <IoHeartOutline size="2rem" />}
                            </button>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-gray-900 text-white rounded-md py-1 px-2 text-sm font-semibold">{product.category}</div>
                    </div>
                    <div className="w-full md:w-1/2 mt-6 md:mt-0">
                        <h1 className="text-3xl font-bold mb-2 text-gray-800">{product.title}</h1>
                        <p className="text-xl font-semibold mb-4 text-blue-600">Rs. {product.price}.00</p>
                        <p className="text-lg text-gray-700 mb-4">{product.description}</p>
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-gray-800">Reviews</h2>
                            <div className="mt-4">
                                {reviews.length > 0 ? (
                                    reviews.map((review, index) => (
                                        <div key={index} className="border-b border-gray-200 pb-4 mb-4">
                                            <p className="text-lg font-semibold">{review.user}</p>
                                            <p className="text-gray-600">{review.comment}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-600">No reviews yet.</p>
                                )}
                            </div>
                            <form onSubmit={handleReviewSubmit} className="mt-4">
                                <textarea 
                                    className="w-full p-2 border border-gray-300 rounded-md" 
                                    rows="4" 
                                    placeholder="Write your review..." 
                                    value={review} 
                                    onChange={(e) => setReview(e.target.value)} 
                                />
                                 <button 
                                    type="submit" 
                                    className="mt-2 bg-gradient-to-r from-black to-blue-700 hover:from-black hover:to-blue-800 text-white px-4 py-2 rounded-md">
                                    Submit Review
                                </button>
                            </form>
                        </div>
                        
                        <button 
                            className='mt-5 bg-gradient-to-r from-black to-blue-700 hover:from-black hover:to-blue-700 text-white text-lg font-semibold w-full py-2 rounded-full transition-all duration-300 transform hover:scale-105'
                            onClick={() => handleAddToCart(product)}
                        >
                            Add to Cart
                        </button>
                        <div className="mt-5 flex justify-around w-full space-x-4">
                            <Link 
                                to="/" 
                                className="flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white text-lg font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
                            >
                                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h2m4 0h12m0 0l-7-7m7 7l-7 7"></path></svg>
                                Home
                            </Link>
                            <Link 
                                to="/cart" 
                                className="flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white text-lg font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
                            >
                                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l1.4-7H6.6M7 13L5.6 6m1.4 7l1 5h9.6l1-5M5 6h14m-3 10a1 1 0 100 2 1 1 0 000-2zm-8 0a1 1 0 100 2 1 1 0 000-2z"></path></svg>
                                Cart
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
