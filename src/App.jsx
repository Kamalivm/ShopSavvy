import { createBrowserRouter, RouterProvider, createRoutesFromElements, Outlet, Route } from 'react-router-dom';
import {Home} from './Pages/Home';
import Cart from './Pages/Cart';
import Favourite from './Pages/Favourite';
import {Order} from './Pages/Order';
import Payment from './Pages/PaymentPage';
import ProductDetails from './Pages/ProductDetails';
import AddItemForm from './Pages/AddItemForm';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/favs" element={<Favourite />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/payment" element={<Payment />} />
        <Route path='/additemform' element = {<AddItemForm/>}/>
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
      <Outlet />
    </div>
  );
};
