// import {
//   createBrowserRouter,
//   RouterProvider,
//   createRoutesFromElements,
//   Outlet,
//   Route,
// } from 'react-router-dom';
// import React, { useState } from 'react';
// import { Home } from './Pages/Home';
// import Cart from './Pages/Cart';
// import Favourite from './Pages/Favourite';
// import Order from './Pages/Order';
// import Payment from './Pages/PaymentPage';
// import ProductDetails from './Pages/ProductDetails';
// import AddItemForm from './Pages/AddItemForm';
// import Login from './Components/Login';
// import Register from './Components/Register';
// import Header from './Components/Header';
// import Data from './Components/Data.jsx';

// function App() {
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<Root />}>
//         <Route path="/" element={<Home />} />
//         <Route path="login" element={<Login />} />
//         <Route path="register" element={<Register />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/favs" element={<Favourite />} />
//         <Route path="/orders" element={<Order />} />
//         <Route path="/payment" element={<Payment />} />
//         <Route path="/additemform" element={<AddItemForm />} />
//       </Route>
//     )
//   );

//   return (
//     <div className="App">
//       <RouterProvider router={router} future={{ v7_startTransition: true }}/>
//     </div>
//   );
// }

// export default App;

// const Root = () => {

//   return (
//     <div>
//       <div className="content">
//         <Outlet/>
//       </div>
//     </div>
//   );
// };


// import {
//   createBrowserRouter,
//   RouterProvider,
//   createRoutesFromElements,
//   Route,
//   Outlet // Add this import
// } from 'react-router-dom';
// import { Home } from './Pages/Home';
// import Cart from './Pages/Cart';
// import Favourite from './Pages/Favourite';
// import Order from './Pages/Order';
// import Payment from './Pages/PaymentPage';
// import ProductDetails from './Pages/ProductDetails';
// import AddItemForm from './Pages/AddItemForm';
// import Login from './Components/Login';
// import Register from './Components/Register';

// function App() {
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<Root />}>
//         <Route path="/home" element={<Home />} />
//         <Route path="/signin" element={<Login />} />
//         <Route path="/signup" element={<Register />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/favs" element={<Favourite />} />
//         <Route path="/orders" element={<Order />} />
//         <Route path="/payment" element={<Payment />} />
//         <Route path="/additemform" element={<AddItemForm />} />
//       </Route>
//     )
//   );

//   return (
//     <div className="App">
//       <RouterProvider router={router} future={{ v7_startTransition: true }} />
//     </div>
//   );
// }

// export default App;

// const Root = () => {
//   return (
//     <div>
//       <div className="content">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
  Navigate // Add this import
} from 'react-router-dom';
import { Home } from './Pages/Home';
import Cart from './Pages/Cart';
import Favourite from './Pages/Favourite';
import Order from './Pages/Order';
import Payment from './Pages/PaymentPage';
import ProductDetails from './Pages/ProductDetails';
import AddItemForm from './Pages/AddItemForm';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        {/* Default redirect to signup */}
        <Route index element={<Navigate to="/signup" />} />

        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/favs" element={<Favourite />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/additemform" element={<AddItemForm />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

const Root = () => {
  return (
    <div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
