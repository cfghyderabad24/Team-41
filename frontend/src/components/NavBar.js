// src/components/NavBar.js
import React from 'react';
import Home from "../pages/home";
import About from "../pages/about";

import Login from "../pages/login";
import Contact from "../pages/contact"
import Register from "../pages/register";

import { Link,Routes,Route } from 'react-router-dom';
import './NavBar.css'
function NavBar({onUserLogIN}) {
  return (
    <nav>
      <ul> 
        <li><Link className='link'    to="/">Home</Link></li>
        <li><Link className='link'  to="/about">About</Link></li>
       
        <li><Link className='link'  to="/login">Login</Link></li>
        <li><Link className='link'  to="/contact">Contact</Link></li>
      </ul>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
         
          <Route path="/login" element={<Login onUserLogIN={onUserLogIN} />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/contact" element={<Contact />} />
         

        </Routes>
    </nav>
  );
}

export default NavBar;
