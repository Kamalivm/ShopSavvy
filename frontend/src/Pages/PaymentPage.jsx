import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Components/CartContext';
import Header from '../Components/Header';
import axios from 'axios';

const PaymentPage = () => {
    const { cartItems, totalAmount } = useContext(CartContext);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [paymentSuccessful, setPaymentSuccessful] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        switch (name) {
            case 'username':
                setUsername(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'address':
                setAddress(value);
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
            // Prepare message for SMS
            const cartSummary = cartItems.map(item => `${item.title} - ${item.quantity} (₹${item.price})`).join(', ');
            const message = `\nOrder Confirmation:\nName: ${username}\nAddress: ${address}\nItems: ${cartSummary}\nPayment Method: ${paymentMethod}\nTotal Amount: Rs. ${totalAmount}.00`;
            const formattedPhone = phoneNumber.startsWith("+") ? phoneNumber : `+91${phoneNumber}`;  // or your country code

            // Send request to backend to trigger SMS
            const response = await axios.post('http://localhost:2000/send-sms', {
                username,
                email,
                phoneNumber : formattedPhone,
                address,
                paymentMethod,
                cartItems: cartItems.map(item => ({
                    title: item.title,
                    quantity: item.quantity,
                    price: item.price,
                })),
                totalAmount,
                message, // Pass the message to backend
            });
    
            console.log(response.data.message);
            setPaymentSuccessful(true);
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    };

    return (
        <div>
            <Header/>
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-8 w-full max-w-6xl">
                {/* Cart Items Section */}
                <div className="w-full md:w-1/2 border-r-2 pr-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-700">Cart Items</h2>
                    <div className="max-h-[400px] overflow-y-auto border border-gray-300 rounded-lg p-4 bg-gray-50">
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center mb-4 border-b border-gray-200 pb-4"
                                >
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-16 h-16 object-contain rounded-md mr-4"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold">{item.title}</h3>
                                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                    </div>
                                    <p className="text-lg font-bold">Rs. {item.price}.00</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No items in the cart.</p>
                        )}
                    </div>
                    <div className="mt-4 text-xl font-semibold text-gray-700">
                        Total Amount: Rs. {totalAmount}.00
                    </div>
                </div>

                {/* Payment Details Section */}
                <div className="w-full md:w-1/2 pl-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-700">Payment Details</h2>
                    <form id="payment-form">
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none"
                                value={username}
                                onChange={handleChange}
                            />
                            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none"
                                value={email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
                                Address
                            </label>
                            <input
                                type="address"
                                id="address"
                                name="address"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none"
                                value={address}
                                onChange={handleChange}
                            />
                            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none"
                                value={phoneNumber}
                                onChange={handleChange}
                            />
                            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="paymentMethod" className="block text-gray-700 font-semibold mb-2">
                                Payment Method
                            </label>
                            <select
                                id="paymentMethod"
                                name="paymentMethod"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none"
                                value={paymentMethod}
                                onChange={handleChange}
                            >
                                <option value="">Select Payment Method</option>
                                <option value="creditCard">Credit Card</option>
                                <option value="debitCard">Debit Card</option>
                                <option value="cashondelivery">CashOnDelivery</option>
                            </select>
                            {errors.paymentMethod && <p className="text-red-500 text-sm">{errors.paymentMethod}</p>}
                        </div>
                        {(paymentMethod === 'creditCard' || paymentMethod === 'debitCard') && (
                            <div>
                                <div className="mb-4">
                                    <label htmlFor="cardNumber" className="block text-gray-700 font-semibold mb-2">
                                        Card Number
                                    </label>
                                    <input
                                        type="text"
                                        id="cardNumber"
                                        name="cardNumber"
                                        className="w-full p-3 border border-gray-300 rounded focus:outline-none"
                                        value={cardNumber}
                                        onChange={handleChange}
                                    />
                                    {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="expiryDate" className="block text-gray-700 font-semibold mb-2">
                                        Expiry Date
                                    </label>
                                    <input
                                        type="text"
                                        id="expiryDate"
                                        name="expiryDate"
                                        className="w-full p-3 border border-gray-300 rounded focus:outline-none"
                                        placeholder="MM/YY"
                                        value={expiryDate}
                                        onChange={handleChange}
                                    />
                                    {errors.expiryDate && <p className="text-red-500 text-sm">{errors.expiryDate}</p>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="cvv" className="block text-gray-700 font-semibold mb-2">
                                        CVV
                                    </label>
                                    <input
                                        type="text"
                                        id="cvv"
                                        name="cvv"
                                        className="w-full p-3 border border-gray-300 rounded focus:outline-none"
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
                                <div
                                    className="mt-4 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                                    role="alert"
                                >
                                    <strong className="font-bold">Payment successful!</strong>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PaymentPage;


