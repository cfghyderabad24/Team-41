// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
function NavBar() {
  return (
    <nav>
      <ul> 
        <li><Link className='link'    to="/">Home</Link></li>
        <li><Link className='link'  to="/about">About</Link></li>
        <li><Link className='link'  to="/cart">Cart</Link></li>
        <li><Link className='link'  to="/supportUs">Support Us</Link></li>
        <li><Link className='link'  to="/login">Login</Link></li>
        <li><Link className='link'  to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
