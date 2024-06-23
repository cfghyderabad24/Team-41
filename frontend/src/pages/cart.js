import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Counter from "./Counter";
import './cart.css'
function Cart() {
  let navigate=useNavigate();
  const [price,setPrice] = useState(0);
  function travel(){
    navigate("/");
  }
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
    };
}, []);
const paymentHandler = async (event) => {
  const num=document.getElementById('ct').textContent;


  console.log(num);
  const amount = price*100*(Number(num));
  const currency = 'INR';
  const receiptId = '1235823';
  const  email  = "bhavanibakka1903@gmail.com";
  const response = await fetch('http://localhost:4000/order', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          amount,
          currency,
          receipt: receiptId,
      })
  });

  const order = await response.json();
  console.log("order", order);

  var option = {
      key:"",
      amount,
      currency,
      name:"Team-41",
      description: "Test Transaction",
      order_id: order.id,
      handler: async (response) => {
          const body = {...response, email}

          const validateResponse = await fetch('http://localhost:4000/validate', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(body)
          })
          const jsonResponse = await validateResponse.json();
          console.log('jsonResponse', jsonResponse);
      },
      prefill: {
          name: "Jakka Vignesh",
          email: "jakkavignesh2002@gmail.com",
          contact: "9502844394"
      },
      notes: {
          address: "Razorpay Corporate Office"
      },
      theme: {
          color: "#3399cc"
      }
  };
  var rzp1 = new window.Razorpay(option); // Note: Accessing Razorpay from the window object
  rzp1.on("payment.failed", (res) => {
      alert("Payment failed");
  });
  rzp1.open();
  event.preventDefault();
};
  let { state } = useLocation();
  let [cart, setCart] = useState([]);
  let [productsData, setProductsData] = useState([]);
  console.log(cart);
  if(cart.length===1 && cart[0].length===20)
  setCart([]);
  function addToCart(product) {
    let price1 = Number(product.price)
    console.log(price1);
    let total = price+price1;
    setPrice(total)
    setCart([...cart,product]);
  }
  function deleteFromCart(product,index){
    let arr=cart;
    arr.splice(index,1);
    setCart(arr);
    setProductsData([...productsData,product]);
  }
  const data = [
    {
      "id": 1,
      "title": "Organic Sanitary Pads",
      "price": 600,
      "description": "Made from certified organic cotton, these pads are free from synthetic pesticides, herbicides, and fertilizers, ensuring purity and safety.",
      "image": "http://media-cache-ak0.pinimg.com/736x/96/8d/35/968d35b15239b2d5c768457671d9c231.jpg",
      "category":"Period Pads",
      "rating": {
          "rate":"",
          "count": ""
      }
  },
  {
      "id": 2,
      "title": "Menstrual Cup",
      "price": 650,
      "description": "Typically made from 100% medical-grade silicone, which is hypoallergenic, latex-free, and free from BPA and other harmful chemicals.",
      "image": "https://1.bp.blogspot.com/-AKlQyCSGBOo/XOzW_nSiooI/AAAAAAAAAII/r657SBeZ8wszQGfF4c9sPNNoY3156fJggCLcBGAs/s1600/Sirona%2BMenstrual-Cup%2B%25281%2529.jpg",
      "category":"Organic Menstrual Cups",
      "rating": {
          "rate": "",
          "count": ""
      }
  },
  {
      "id": 3,
      "title": "Advocacy",
      "price": 900,
      "description": "Providing menstrual essentials for a girl child annually through a donation of 900.",
      "category": "Menstrual Essesntials",
      "image": "https://regencyhealthcare.in/wp-content/uploads/2021/05/89-1200x628.png",
      "category":"Advocacy",
      "rating": {
          "rate": "",
          "count": ""
      }
  },
  {
      "id": 4,
      "title": "Donate for a Cause",
      "price": 1000,
      "description": "Donations help fund projects and programs that aim to improve society, such as education, healthcare, environmental conservation, poverty alleviation, or human rights advocacy.",
      "image": "https://www.unwater.org/app/uploads/2019/05/Menstrual-Hygiene-Day-2019-Card_vs4_13May2019.png",
      "category":"Sessions Awareness ",
      "rating": {
          "rate": "",
          "count": ""
      }
  },
  {
    "id": 1,
    "title": "Organic Sanitary Pads",
    "price": 600,
    "description": "Made from certified organic cotton, these pads are free from synthetic pesticides, herbicides, and fertilizers, ensuring purity and safety.",
    "image": "http://media-cache-ak0.pinimg.com/736x/96/8d/35/968d35b15239b2d5c768457671d9c231.jpg",
    "category":"Period Pads",
    "rating": {
        "rate":"",
        "count": ""
    }
},
{
    "id": 2,
    "title": "Menstrual Cup",
    "price": 650,
    "description": "Typically made from 100% medical-grade silicone, which is hypoallergenic, latex-free, and free from BPA and other harmful chemicals.",
    "image": "https://1.bp.blogspot.com/-AKlQyCSGBOo/XOzW_nSiooI/AAAAAAAAAII/r657SBeZ8wszQGfF4c9sPNNoY3156fJggCLcBGAs/s1600/Sirona%2BMenstrual-Cup%2B%25281%2529.jpg",
    "category":"Organic Menstrual Cups",
    "rating": {
        "rate": "",
        "count": ""
    }
},
{
    "id": 3,
    "title": "Advocacy",
    "price": 900,
    "description": "Providing menstrual essentials for a girl child annually through a donation of 900.",
    "category": "Menstrual Essesntials",
    "image": "https://regencyhealthcare.in/wp-content/uploads/2021/05/89-1200x628.png",
    "category":"Advocacy",
    "rating": {
        "rate": "",
        "count": ""
    }
},
{
    "id": 4,
    "title": "Donate for a Cause",
    "price": 1000,
    "description": "Donations help fund projects and programs that aim to improve society, such as education, healthcare, environmental conservation, poverty alleviation, or human rights advocacy.",
    "image": "https://www.unwater.org/app/uploads/2019/05/Menstrual-Hygiene-Day-2019-Card_vs4_13May2019.png",
    "category":"Sessions Awareness ",
    "rating": {
        "rate": "",
        "count": ""
    }
}
];
  useEffect(() => {
    setProductsData(data);
  }, []);

  useEffect(()=>{
    if(state){
      setCart([state]);
    }
  },[state]);
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
     
      <div className="scrollable p-2">
        <div className="">
        <p className="add">You might also add</p>
        </div>
         {productsData.filter((selected)=>{
          let y=0;
          for(let i=0;i<cart.length;i++){
            if(cart[i]===selected)
            y=1
          }
          if(y===0)
          return selected;
        }).map((object, index) => ( 
          <div key={index} className="key">
            <img src={object.image} alt="" className="" width={"150px"} />
            <div className="">
              <p className="fw-3 fs-5 ms-4">{object.title}</p>
              <div
            className="custom-para1 ms-4 mb-5 d-inline ps-2 pe-2 pt-1 pb-1 rounded-4"
            style={{ width: "70px" }}
          >
            
          </div>
          <div className="">
            
            <p className=" fs-5 fw-3">Price:{object.price}</p>
            <div className="mt-2">
            <button onClick={()=>addToCart(object)} className="border border-0 ms-4 mb-2 p-2 rounded-4 bg-warning-subtle text-dark">Add to cart</button>
            </div>
            </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hello scrollable p-4">
        {cart.length===0?<p className="emt">Your  Cart is EMPTY</p>:
        cart.map((obj, index) => (
          <div className="d-flex content-content border border-1 mb-2 p-4" key={index}>
            <img src={obj.image} style={{ width: "150px" }} alt="" />
            <div className="">
            <p className="fw-4 fs-5 ms-4">{obj.title}</p>
            <Counter />
            <i className="bi fs-5 bi-currency-rupee fw-3 ms-4"></i>
            <p className="d-inline fs-5 fw-3">{obj.price}</p>
            <div className="mt-3 ms-4">
            <button onClick={()=>deleteFromCart(obj,index)} className="custom-button text-danger bg-white del">Delete</button>
            </div>
          </div>
          </div>
        ))}
        {cart.length===0?<p></p>:<div className="text-center mt-3">
          <button className="but" onClick={paymentHandler}>Confirm Products</button>
        </div>
}
      </div>
    </div>
  );
}
export default Cart;


 


