import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './view/home';
import ProductDetail from './view/product_details';
import Cart from './view/cart';
import CheckoutForm from './component/checkout';
import Dashboard from './admin/dashboard';
import AddProduct from './admin/add_product';
import AdminLogin from './admin/login';
import Category from './admin/category';
import AddCategory from './admin/add_category';

function App() {
  const role = localStorage.getItem('userRole');
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        {role === 'Admin' ? (
          <Link to="/dashboard" className="no-underline" style={{ color: 'green' }}><p>Product</p></Link>
        ) : (
          <Link to="/product" className="no-underline" style={{ color: 'green' }}><p>Home</p></Link>
        )}

        {role === 'Admin' ? (
          <Link to="/category" className="no-underline"><p>Category</p></Link>
        ) : (
          <Link to="/cart" className="no-underline"><p>Cart</p></Link>
        )}

        {role === 'Admin' ? (
          <Link className="no-underline" onClick={
            () => {
              localStorage.setItem('userRole', 'User');
              navigate('/');
              window.location.reload();
            }}>
            <p>Logout</p></Link>
        ) : (
          <Link to="/login" className="no-underline"><p>Login</p></Link>
        )}
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/checkout" element={<CheckoutForm />} />
        <Route path="/login" element={<AdminLogin />} />


        {role === 'Admin' && (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product/add" element={<AddProduct />} />
            <Route path="/product/update/:id" element={<AddProduct />} />
            <Route path="/category" element={<Category />} />
            <Route path="/category/add" element={<AddCategory />} />
            <Route path="/category/update/:id" element={<AddCategory />} />
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
