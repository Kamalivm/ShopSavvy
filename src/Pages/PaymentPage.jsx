import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const total = 160.00;

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [errors, setErrors] = useState({});

  const handlePayment = () => {
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

    console.log('Processing payment...');
    // Perform payment processing logic here
    setPaymentSuccessful(true);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full transform transition duration-300 hover:scale-105">
        <h1 className="text-4xl font-bold mb-6 text-black">Payment Details</h1>
        <div className="mb-4">
          <label htmlFor="username" className="block text-black font-semibold mb-2">Username</label>
          <input type="text" id="username" className="w-full p-3 border border-gray-500 rounded focus:outline-none" value={username} onChange={(e) => setUsername(e.target.value)} />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-black font-semibold mb-2">Email</label>
          <input type="email" id="email" className="w-full p-3 border border-gray-500 rounded focus:outline-none" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-black font-semibold mb-2">Phone Number</label>
          <input type="tel" id="phoneNumber" className="w-full p-3 border border-gray-500 rounded focus:outline-none" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="paymentMethod" className="block text-black font-semibold mb-2">Payment Method</label>
          <select id="paymentMethod" className="w-full p-3 border border-gray-500 rounded focus:outline-none" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
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
              <label htmlFor="cardNumber" className="block text-black font-semibold mb-2">Card Number</label>
              <input type="text" id="cardNumber" className="w-full p-3 border border-gray-500 rounded focus:outline-none" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
              {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="expiryDate" className="block text-black font-semibold mb-2">Expiry Date</label>
              <input type="text" id="expiryDate" className="w-full p-3 border border-gray-500 rounded focus:outline-none" placeholder="MM/YY" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
              {errors.expiryDate && <p className="text-red-500 text-sm">{errors.expiryDate}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="cvv" className="block text-black font-semibold mb-2">CVV</label>
              <input type="text" id="cvv" className="w-full p-3 border border-gray-500 rounded focus:outline-none" value={cvv} onChange={(e) => setCvv(e.target.value)} />
              {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
            </div>
          </div>
        )}
        {/* <div className="mb-4">
          <label htmlFor="total" className="block text-black font-semibold mb-2">Total Amount</label>
          <p id="total" className="w-full p-3 border border-gray-500 rounded bg-white text-black">{parseFloat(total).toFixed(2)}</p>
        </div> */}
        <button className="w-full bg-black text-white px-4 py-3 rounded hover:bg-gray-800 focus:outline-none transition duration-300 ease-in-out" onClick={handlePayment}>
          Pay Now
        </button>
        {paymentSuccessful && (
          <div className="mt-4  border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Payment successful!</strong>
          </div>
        )}
        <div className="mt-4 flex justify-center">
  <div className="flex space-x-4">
    <Link to="/" className="inline-block bg-white border border-black text-black font-bold py-2 px-4 rounded hover:bg-black hover:text-white hover:border-transparent transition duration-300 ease-in-out">
      Home
    </Link>
    <Link to="/cart" className="inline-block bg-white border border-black text-black font-bold py-2 px-4 rounded hover:bg-black hover:text-white hover:border-transparent transition duration-300 ease-in-out">
      Go to Cart
    </Link>
  </div>
</div>

      </div>
    </div>
  );
};

export default PaymentPage;
