import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './view/home';
import ProductDetail from './view/product_details';
import Cart from './view/cart';

function App() {
  return (
    <>
      <div className="header">
      <Link to="/product" className="text-decoration-none"><p>Home</p></Link>
      <Link to="/cart" className="text-decoration-none"><p>Cart</p></Link>
      </div>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/product" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
