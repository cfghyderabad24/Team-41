import React from "react";
import { FaFacebookF } from "react-icons/fa";
import './contact.css'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Contact() {
  return (
<>

<div className="box1">
  <h1>Get in Touch</h1>
  <h3>Reach out to us.</h3>
  <h3>
We will get back to you shortly.

</h3>


</div>
<div className="msgform" >
  <form>
   <div className="uname"> <input type="text" required placeholder="First Name*"></input>
   <input type="text" required placeholder="Last Name*"></input>
   </div>
    <input type="email" required placeholder="Email*"></input>
    <div>
    <textarea rows='7' placeholder="message*"></textarea>
    </div>
    <button type="submit">Send message</button>
  </form>
    
</div>
<div className="box2">
<div className="b1">
  <img src="https://gooduniverse.org/assets/img/gu/logodark-2x.png"></img>
  <div className="socials">
  <a href="https://www.facebook.com/GoodUniverseNGO" target="_"><FaFacebookF /></a>
  <a href="https://twitter.com/GooduniverseNGO" target="_"><FaTwitter /></a>
  <a href="https://www.linkedin.com/company/gooduniversengo/"><FaLinkedin /></a>
  <a href="https://instagram.com/gooduniversengo?igshid=YmMyMTA2M2Y="><FaInstagram /></a>
  </div>
  <p>© 2024 | Designed with <FaRegHeart /> in India by WebbTechy
</p>
</div>
  <div className="b2">
    <h3>Get in Touch</h3>
    <p>Kondapur Main Road, SBI Officers Quarters, Gachibowli, Hyderabad, Telangana 500046, India</p>
    <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_" >contact@gooduniverse.org</a>
   


    <p>+91 - 79951 80851</p>
  </div>
  <div className="b3">
    <h1>Good Universe</h1>
    <p>Founded in 2015, Good Universe works at the intersection of Gender, Health and Climate Change. Our focal areas such as Gender and Climate Change are tangentially broached areas in the development and social sectors.</p>
  </div>
  
</div>

</>    
  );
}

export default Contact;
