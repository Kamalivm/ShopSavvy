import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useParams, NavLink, Link, useNavigate } from 'react-router-dom';
import Data from '../Components/Data.jsx';
import { CartContext } from '../Components/CartContext';
import { IoCheckmarkCircle, IoHeart } from 'react-icons/io5';
import { CiShoppingCart, CiDeliveryTruck, CiSearch } from 'react-icons/ci';
import { FiPlusCircle } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import Header from '../Components/Header.jsx';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useContext(CartContext);
    const [notification, setNotification] = useState(false);
    const [review, setReview] = useState('');
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();

    // Function to find the product by ID
    const findProductById = useCallback((id) => {
        for (const category in Data) {
            const foundProduct = Data[category]?.find(item => item.id === parseInt(id));
            if (foundProduct) return { category, product: foundProduct };
        }
        return null;
    }, []);

    // Load product and reviews
    useEffect(() => {
        const result = findProductById(id);
        if (result) {
            setProduct(result.product);
            const storedReviews = JSON.parse(localStorage.getItem(`reviews-${id}`)) || [];
            setReviews(storedReviews);
        }
    }, [id, findProductById]);

    // Handle logout and redirect
    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    // Add product to cart
    const handleAddToCart = (product) => {
        addToCart(product);
        setNotification(true);
        setTimeout(() => setNotification(false), 3000);
    };
    
    // Submit a new review
    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const newReview = { user: "Anonymous", comment: review };
        const updatedReviews = [...reviews, newReview];
        setReviews(updatedReviews);
        localStorage.setItem(`reviews-${id}`, JSON.stringify(updatedReviews));
        setReview('');
    };

    if (!product) return <div>Loading...</div>;

    const buttonColorClass = "from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800";

    return (
        <div className="w-full relative bg-gray-100">

            <Header/>

            {/* Product Details Section */}
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                {notification && (
                    <div className="absolute top-5 right-5 bg-black text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2">
                        <IoCheckmarkCircle size="1.5rem" />
                        <span>Product successfully added to cart!</span>
                    </div>
                )}
                <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-lg max-w-4xl">
                    <div className="flex flex-col md:flex-row items-center space-x-6">
                        <div className="w-full md:w-1/2">
                            <img src={product.img} alt={product.title} className="w-full h-80 object-cover rounded-lg shadow-md hover:scale-105 transition" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
                            <p className="text-xl font-semibold text-blue-600">Rs. {product.price}.00</p>
                            <p className="text-lg text-gray-700">{product.description}</p>
                            <p className="text-lg text-gray-700">Quantity: {product.quantity}</p>
                            <button onClick={() => handleAddToCart(product)} className={`mt-5 bg-gradient-to-r ${buttonColorClass} text-white py-2 px-4 rounded-full w-full transform hover:scale-105`}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold">Reviews</h2>
                        <div className="mt-4">
                            {reviews.length > 0 ? reviews.map((rev, i) => (
                                <div key={i} className="border-b pb-4">
                                    <p className="font-semibold">{rev.user}</p>
                                    <p>{rev.comment}</p>
                                </div>
                            )) : <p>No reviews yet.</p>}
                        </div>
                        <form onSubmit={handleReviewSubmit} className="mt-4">
                            <textarea className="w-full border p-2 rounded-md" rows="4" placeholder="Write your review..." value={review} onChange={(e) => setReview(e.target.value)} />
                            <button type="submit" className={`mt-2 bg-gradient-to-r ${buttonColorClass} text-white px-4 py-2 rounded-md`}>
                                Submit Review
                            </button>
                        </form>
                    </div>
                    <div className="mt-8 text-center">
                        <Link to="/" className="text-blue-600 hover:underline text-lg font-semibold">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;