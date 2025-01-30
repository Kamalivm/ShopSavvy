// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { CiShoppingCart, CiDeliveryTruck, CiSearch } from 'react-icons/ci';
// // import { IoHeart } from 'react-icons/io5';
// // import { FaUser } from 'react-icons/fa';

// // const Order = () => {
// //   const handleLogout = () => {
// //     localStorage.clear();
// //     window.location.href = '/'; // Redirect to the home page after logout
// //   };

// //   const searchHandler = (e) => {
// //     // Handle search query logic here
// //   };

// //   return (
// //     <div>
// //       {/* Header Section */}
// //       <div className="sticky top-0 z-10">
// //         <div className="header flex justify-between items-center p-4 bg-white shadow-md">
// //           <h1 className="text-3xl font-bold">ShopSavvy</h1>
// //           <div className="flex items-center space-x-4">
// //             {/* Cart Link */}
// //             <Link
// //               to="/cart"
// //               className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
// //             >
// //               <CiShoppingCart size={'1.5rem'} />
// //               <span className="ml-2">Cart</span>
// //             </Link>

// //             {/* Favorites Link */}
// //             <Link
// //               to="/favs"
// //               className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
// //             >
// //               <IoHeart size={'1.5rem'} className="text-red-500" />
// //               <span className="ml-2">Favorites</span>
// //             </Link>

// //             {/* Orders Link */}
// //             <Link
// //               to="/orders"
// //               className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
// //             >
// //               <CiDeliveryTruck size={'1.5rem'} />
// //               <span className="ml-2">Orders</span>
// //             </Link>
// //           </div>

// //           {/* Search Bar */}
// //           <div className="flex items-center space-x-2">
// //             <div className="search flex items-center px-5 py-2 bg-gray-200 rounded-lg shadow-sm">
// //               <input
// //                 type="text"
// //                 placeholder="Search product"
// //                 className="bg-transparent outline-none w-full"
// //                 onChange={searchHandler}
// //               />
// //               <button onClick={searchHandler}>
// //                 <CiSearch size={20} />
// //               </button>
// //             </div>

// //             {/* User Profile / Logout */}
// //             <button
// //               className="flex items-center justify-center bg-gray-700 text-white px-3 py-3 rounded-full hover:bg-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
// //               onClick={handleLogout}
// //             >
// //               <FaUser size="1.2em" />
// //             </button>
// //           </div>
// //         </div>

// //         {/* Categories Section */}
// //         <div className="categories bg-white w-full flex justify-between space-x-5 px-4 py-3 shadow-md">
// //           {['All', 'groceryItems', 'fruitItems', 'vegetableItems', 'stationaryItems', 'householdItems', 'bakeryItems', 'kidsItems', 'sportsItems', 'bookItems'].map((category) => (
// //             <div
// //               key={category}
// //               className="px-5 py-2 hover:bg-black hover:text-white rounded-full transition-colors duration-300 cursor-pointer"
// //             >
// //               <button>
// //                 {category.charAt(0).toUpperCase() + category.slice(1).replace('Items', '')}
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Main Content Section */}
// //       <div className="w-full h-screen flex justify-center items-center bg-gray-100">
// //         <div className="space-y-5 flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg">
// //           <h1 className="text-2xl font-semibold text-gray-800 mb-4">
// //             You don't have any ordered products
// //           </h1>
// //           <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-6">
// //             {/* If there are any ordered products, render them here */}
// //           </div>
// //           <div className="mt-8 text-center">
// //             <Link to="/" className="text-blue-600 hover:underline text-lg font-semibold">
// //               Continue Shopping
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// // export default Order;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { CiShoppingCart, CiDeliveryTruck, CiSearch } from 'react-icons/ci';
// import { IoHeart } from 'react-icons/io5';
// import { FaUser } from 'react-icons/fa';

// const Order = () => {
//   const handleLogout = () => {
//     localStorage.clear();
//     window.location.href = '/'; // Redirect to the home page after logout
//   };

//   const searchHandler = (e) => {
//     // Handle search query logic here
//   };

//   return (
//     <div>
//       {/* Header Section */}
//       <div className="sticky top-0 z-10">
//         <div className="header flex justify-between items-center p-4 bg-white shadow-md">
//           <h1 className="text-3xl font-bold">ShopSavvy</h1>
//           <div className="flex items-center space-x-4">
//             {/* Cart Link */}
//             <Link
//               to="/cart"
//               className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
//             >
//               <CiShoppingCart size={'1.5rem'} />
//               <span className="ml-2">Cart</span>
//             </Link>

//             {/* Favorites Link */}
//             <Link
//               to="/favs"
//               className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
//             >
//               <IoHeart size={'1.5rem'} className="text-red-500" />
//               <span className="ml-2">Favorites</span>
//             </Link>

//             {/* Orders Link */}
//             <Link
//               to="/orders"
//               className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
//             >
//               <CiDeliveryTruck size={'1.5rem'} />
//               <span className="ml-2">Orders</span>
//             </Link>
//           </div>

//           {/* Search Bar */}
//           <div className="flex items-center space-x-2">
//             <div className="search flex items-center px-5 py-2 bg-gray-200 rounded-lg shadow-sm">
//               <input
//                 type="text"
//                 placeholder="Search product"
//                 className="bg-transparent outline-none w-full"
//                 onChange={searchHandler}
//               />
//               <button onClick={searchHandler}>
//                 <CiSearch size={20} />
//               </button>
//             </div>

//             {/* User Profile / Logout */}
//             <button
//               className="flex items-center justify-center bg-gray-700 text-white px-3 py-3 rounded-full hover:bg-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
//               onClick={handleLogout}
//             >
//               <FaUser size="1.2em" />
//             </button>
//           </div>
//         </div>

//         {/* Categories Section */}
//         <div className="categories bg-white w-full flex justify-between space-x-5 px-4 py-3 shadow-md">
//           {['All', 'groceryItems', 'fruitItems', 'vegetableItems', 'stationaryItems', 'householdItems', 'bakeryItems', 'kidsItems', 'sportsItems', 'bookItems'].map((category) => (
//             <div
//               key={category}
//               className="px-5 py-2 hover:bg-black hover:text-white rounded-full transition-colors duration-300 cursor-pointer"
//             >
//               <button>
//                 {category.charAt(0).toUpperCase() + category.slice(1).replace('Items', '')}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main Content Section */}
//       <div className="w-full h-screen flex justify-center items-center bg-gray-100">
//         <div className="space-y-5 flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg">
//           <h1 className="text-2xl font-semibold text-gray-800 mb-4">
//             You don&apos;t have any ordered products
//           </h1>
//           <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-6">
//             {/* If there are any ordered products, render them here */}
//           </div>
//           <div className="mt-8 text-center">
//             <Link to="/" className="text-blue-600 hover:underline text-lg font-semibold">
//               Continue Shopping
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Order;

import { Link } from 'react-router-dom';
import { CiShoppingCart, CiDeliveryTruck, CiSearch } from 'react-icons/ci';
import { IoHeart } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';

const Order = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/'; // Redirect to the home page after logout
  };

  const searchHandler = () => {
    // Handle search query logic here (you can add event handling if needed)
  };

  return (
    <div>
      {/* Header Section */}
      <div className="sticky top-0 z-10">
        <div className="header flex justify-between items-center p-4 bg-white shadow-md">
          <h1 className="text-3xl font-bold">ShopSavvy</h1>
          <div className="flex items-center space-x-4">
            {/* Cart Link */}
            <Link
              to="/cart"
              className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <CiShoppingCart size={'1.5rem'} />
              <span className="ml-2">Cart</span>
            </Link>

            {/* Favorites Link */}
            <Link
              to="/favs"
              className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <IoHeart size={'1.5rem'} className="text-red-500" />
              <span className="ml-2">Favorites</span>
            </Link>

            {/* Orders Link */}
            <Link
              to="/orders"
              className="flex items-center justify-center bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <CiDeliveryTruck size={'1.5rem'} />
              <span className="ml-2">Orders</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex items-center space-x-2">
            <div className="search flex items-center px-5 py-2 bg-gray-200 rounded-lg shadow-sm">
              <input
                type="text"
                placeholder="Search product"
                className="bg-transparent outline-none w-full"
                onChange={searchHandler}
              />
              <button onClick={searchHandler}>
                <CiSearch size={20} />
              </button>
            </div>

            {/* User Profile / Logout */}
            <button
              className="flex items-center justify-center bg-gray-700 text-white px-3 py-3 rounded-full hover:bg-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
              onClick={handleLogout}
            >
              <FaUser size="1.2em" />
            </button>
          </div>
        </div>

        {/* Categories Section */}
        <div className="categories bg-white w-full flex justify-between space-x-5 px-4 py-3 shadow-md">
          {['All', 'groceryItems', 'fruitItems', 'vegetableItems', 'stationaryItems', 'householdItems', 'bakeryItems', 'kidsItems', 'sportsItems', 'bookItems'].map((category) => (
            <div
              key={category}
              className="px-5 py-2 hover:bg-black hover:text-white rounded-full transition-colors duration-300 cursor-pointer"
            >
              <button>
                {category.charAt(0).toUpperCase() + category.slice(1).replace('Items', '')}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-full h-screen flex justify-center items-center bg-gray-100">
        <div className="space-y-5 flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            You don&apos;t have any ordered products
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
    </div>
  );
};

export default Order;
