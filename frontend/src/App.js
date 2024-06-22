import React,{useState,useEffect} from "react";
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
import Product from "./pages/product";
import UserNavBar from "./components/UserNavBar"

export default function App() {
  const [isUserLoggedIn,setUserLoggedIn] = useState(false);
  useEffect(() => {
    const userLoggedIn = sessionStorage.getItem("isUserLoggedIn")==="true"

    setUserLoggedIn(userLoggedIn);
  }, [])

  const onUserLogIN = ()=>{ 
    sessionStorage.setItem("isUserLoggedIn","true")
  }
  
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
          <Route path="/product" element={<Product/>}/>
        </Routes>
      {isUserLoggedIn?(
        <UserNavBar  />
      ):(
        <NavBar onUserLogIN={onUserLogIN} />
      )}
      </div>
    </Router>
  );
}
