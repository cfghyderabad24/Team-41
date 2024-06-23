import React from 'react';
import './Header.css';

const Header = () => (
  <header>
    <div className="logo">Good Universe</div>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">What We Do</a></li>
        <li><a href="/">Resources</a></li>
        <li><a href="/">Support Us</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  </header>
);
export default Header;