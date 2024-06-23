// src/components/NavBar.js
import React from 'react';
import { Link,Routes,Route,useNavigate } from 'react-router-dom';
import Cart from "../pages/cart";
import SupportUs from "../pages/supportUs";
import Product from '../pages/product';
import './NavBar.css'
import UserHome from '../pages/UserHome';
function UserNavBar() {
    const navigate = useNavigate();
    const handlelogout = () => {
        sessionStorage.removeItem("isUserLoggedIn");
        navigate("/login");
        window.location.reload();
      };
  return (
    <nav>
        
      <ul> 
        <li><Link className='link' to="/">Home</Link></li>
        <li><Link className='link'  to="/cart">Cart</Link></li>
        <li><Link className='link'  to="/supportUs">Support Us</Link></li>
        <li><Link className='link' onClick={handlelogout}>Logout</Link></li>
      </ul>
      <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/supportUs" element={<SupportUs />} />
          <Route path="/userhome" element={<UserHome/>} />
          <Route path="/product" element={<Product/>}/>
        </Routes>
    </nav>
  );
} 

export default UserNavBar;
