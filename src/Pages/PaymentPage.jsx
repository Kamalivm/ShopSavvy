import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import { CartContext } from '../Components/CartContext';

const PaymentPage = () => {
    const { totalAmount } = useContext(CartContext);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [paymentSuccessful, setPaymentSuccessful] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Clear the error for the corresponding field when user starts typing
        setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
        switch(name) {
            case 'username':
                setUsername(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phoneNumber':
                setPhoneNumber(value);
                break;
            case 'paymentMethod':
                setPaymentMethod(value);
                break;
            case 'cardNumber':
                setCardNumber(value);
                break;
            case 'expiryDate':
                setExpiryDate(value);
                break;
            case 'cvv':
                setCvv(value);
                break;
            default:
                break;
        }
    };

    const handlePayment = async (e) => {
        e.preventDefault(); 

        const validationErrors = {};

        if (!username) validationErrors.username = 'Username is required';
        if (!email) validationErrors.email = 'Email is required';
        if (!phoneNumber) validationErrors.phoneNumber = 'Phone number is required';
        if (!paymentMethod) validationErrors.paymentMethod = 'Payment method is required';

        if (paymentMethod === 'creditCard' || paymentMethod === 'debitCard') {
            if (!cardNumber) validationErrors.cardNumber = 'Card number is required';
            if (!expiryDate) validationErrors.expiryDate = 'Expiry date is required';
            if (!cvv) validationErrors.cvv = 'CVV is required';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            setPaymentSuccessful(true);
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    };
    
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full transform transition duration-300 hover:scale-105">
                <h1 className="text-4xl font-bold mb-6 text-black">Payment Details</h1>
                <h2 name='totalAmount' className="text-2xl font-bold mb-6 text-black">Total Amount: Rs. {totalAmount}.00</h2>
                <form id="payment-form">
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-black font-semibold mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name='username'
                            className="w-full p-3 border border-gray-500 rounded focus:outline-none"
                            value={username}
                            onChange={handleChange}
                        />
                        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-black font-semibold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name='email'
                            className="w-full p-3 border border-gray-500 rounded focus:outline-none"
                            value={email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-black font-semibold mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name='phoneNumber'
                            className="w-full p-3 border border-gray-500 rounded focus:outline-none"
                            value={phoneNumber}
                            onChange={handleChange}
                        />
                        {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="paymentMethod" className="block text-black font-semibold mb-2">
                            Payment Method
                        </label>
                        <select
                            id="paymentMethod"
                            name='paymentMethod'
                            className="w-full p-3 border border-gray-500 rounded focus:outline-none"
                            value={paymentMethod}
                            onChange={handleChange}
                        >
                            <option value="">Select Payment Method</option>
                            <option value="creditCard">Credit Card</option>
                            <option value="debitCard">Debit Card</option>
                            <option value="paypal">PayPal</option>
                        </select>
                        {errors.paymentMethod && <p className="text-red-500 text-sm">{errors.paymentMethod}</p>}
                    </div>
                    {(paymentMethod === 'creditCard' || paymentMethod === 'debitCard') && (
                        <div>
                            <div className="mb-4">
                                <label htmlFor="cardNumber" className="block text-black font-semibold mb-2">
                                    Card Number
                                </label>
                                <input
                                    type="text"
                                    id="cardNumber"
                                    name='cardNumber'
                                    className="w-full p-3 border border-gray-500 rounded focus:outline-none"
                                    value={cardNumber}
                                    onChange={handleChange}
                                />
                                {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="expiryDate" className="block text-black font-semibold mb-2">
                                    Expiry Date
                                </label>
                                <input
                                    type="text"
                                    id="expiryDate"
                                    name='expiryDate'
                                    className="w-full p-3 border border-gray-500 rounded focus:outline-none"
                                    placeholder="MM/YY"
                                    value={expiryDate}
                                    onChange={handleChange}
                                />
                                {errors.expiryDate && <p className="text-red-500 text-sm">{errors.expiryDate}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="cvv" className="block text-black font-semibold mb-2">
                                    CVV
                                </label>
                                <input
                                    type="text"
                                    id="cvv"
                                    name='cvv'
                                    className="w-full p-3 border border-gray-500 rounded focus:outline-none"
                                    value={cvv}
                                    onChange={handleChange}
                                />
                                {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
                            </div>
                        </div>
                    )}
                    <div className="mt-4">
                        <button
                            className="w-full bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
                            onClick={handlePayment}
                        >
                            Pay Now
                       
                            </button>
                        {paymentSuccessful && (
                            <div className="mt-4 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                                <strong className="font-bold">Payment successful!</strong>
                            </div>
                        )}
                    </div>
                </form>
                <div className="mt-4 flex justify-center">
                    <div className="flex space-x-4">
                        <Link
                            to="/"
                            className="inline-block bg-white border border-black text-black font-bold py-2 px-4 rounded hover:bg-black hover:text-white hover:border-transparent transition duration-300 ease-in-out"
                        >
                            Home
                        </Link>
                        <Link
                            to="/cart"
                            className="inline-block bg-white border border-black text-black font-bold py-2 px-4 rounded hover:bg-black hover:text-white hover:border-transparent transition duration-300 ease-in-out"
                        >
                            Go to Cart
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
