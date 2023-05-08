import './styles.css';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import Product from './Pages/ProductPage';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/productlist" element={<ProductList />} />
      <Route path="/product" element={<Product />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route />
    </Routes>
  );
}
