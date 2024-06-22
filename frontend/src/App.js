import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Cart from "./pages/cart";
import SupportUs from "./pages/supportUs";
import Login from "./pages/login";
import Contact from "./pages/contact"
import NavBar from "./components/NavBar";
import Register from "./pages/register";
import UserHome from "./pages/UserHome";

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/supportUs" element={<SupportUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/userhome" element={<UserHome/>} />
        </Routes>
      </div>
    </Router>
  );
}
