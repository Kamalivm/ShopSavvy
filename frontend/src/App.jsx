import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  Route,
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
import ForgotPassword from './Components/ForgotPassword';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="register" element={<Register />} />
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
      <RouterProvider router={router} future={{ v7_startTransition: true }}/>
    </div>
  );
}

export default App;

const Root = () => {

  return (
    <div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
};


