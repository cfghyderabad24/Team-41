import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Counter from "../counter/Counter";
function Cart() {
  let navigate=useNavigate();
  const [price,setPrice] = useState(1);
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
  const amount = price*100;
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
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL.AC_SL1500.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL.AC_SY879._SX._UX._SY._UY.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL.AC_UX679.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },
    {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL.AC_UY879.jpg",
        "rating": {
            "rate": 2.1,
            "count": 430
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
      <div
        className="scrollable bg-dark text-white p-4"
        style={{ flex: "0 0 250px" }}
      >
        <button onClick={travel} className="btn ms-5"><i className="bi fs-1 bi-house-door-fill text-white"></i></button>
        <p className="mb-4 text-info fs-4 fw-bolder">Filter Products</p>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label labels"
            htmlFor="flexRadioDefault1"
          >
            Ascending
          </label>
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label
            className="form-check-label labels"
            htmlFor="flexRadioDefault2"
          >
            Descending
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="customRange3" className="form-label">
            Price
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="5"
            step="0.5"
            id="customRange3"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="customRange3" className="form-label">
            Rating
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="5"
            step="0.1"
            id="customRange3"
          ></input>
        </div>
      </div>
      <div className="scrollable p-2">
        <div className="bg-secondary rounded-4">
        <p className="text-white text-center fs-3">You might also add</p>
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
          <div key={index} className="d-flex content mt-2 border border-1 p-4">
            <img src={object.image} alt="" className="mb-5" width={"150px"} />
            <div className="">
              <p className="fw-3 fs-5 ms-4">{object.title}</p>
              <div
            className="custom-para1 ms-4 mb-5 d-inline ps-2 pe-2 pt-1 pb-1 rounded-4"
            style={{ width: "70px" }}
          >
            <p className="d-inline pe-1">{object.rating.rate}</p>
            <i className="bi bi-star-fill"></i>
          </div>
              <div className="d-inline ps-2 rating">
            {object.rating.count} Ratings & reviews
          </div>
          <div className="mt-3">
              <i className="bi fs-5 bi-currency-rupee fw-3 ms-4"></i>
            <p className="d-inline fs-5 fw-3">{object.price}</p>
            <div className="mt-2">
            <button onClick={()=>addToCart(object)} className="border border-0 ms-4 p-2 rounded-4 bg-warning-subtle text-dark">Add to cart</button>
            </div>
            </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hello scrollable p-4">
        {cart.length===0?<p className="text-center bg-dark text-white rounded-4 fs-3">Your Cattron Cart is EMPTY</p>:
        cart.map((obj, index) => (
          <div className="d-flex content-content border border-1 mb-2 p-4" key={index}>
            <img src={obj.image} style={{ width: "150px" }} alt="" />
            <div className="">
            <p className="fw-4 fs-5 ms-4">{obj.title}</p>
            {/* <Counter /> */}
            <i className="bi fs-5 bi-currency-rupee fw-3 ms-4"></i>
            <p className="d-inline fs-5 fw-3">{obj.price}</p>
            <div className="mt-3 ms-4">
            <button onClick={()=>deleteFromCart(obj,index)} className="custom-button text-danger bg-white">Delete</button>
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
