import React from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

const Order = () => {

  return (
    <div>
      <Header/>
      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            You don't have any ordered products
          </h1>
          <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-6">
            {/* If there are any ordered products, render them here */}
          </div>
          <div className="mt-8 text-center">
            <Link to="/" className="text-blue-600 hover:underline text-lg font-semibold">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
  );
}
export default Order;
