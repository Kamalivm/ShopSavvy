import React from 'react';
import { Link } from 'react-router-dom';
import { IoHeart } from 'react-icons/io5';

export function Order() {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-100'>
      <div className='space-y-5 flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg'>
        <h1 className='text-2xl font-semibold text-gray-800 mb-4'>You don't have any ordered products</h1>
        <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-6">
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
