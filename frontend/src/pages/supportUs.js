import React, { useEffect, useState } from 'react'; // Correct import statement for useState and useEffect
import { useNavigate } from 'react-router-dom';
import Product from './product';
// Assuming you are using react-router-dom for useNavigate

function Supportus() {
    const navigate = useNavigate();
    const [details, setDetails] = useState([]);

    const data = [
        {
            "id": 1,
            "title": "Sanitary Pads",
            "price": 600,
            "description": "Made from 100% certified organic cotton, our pads are free from harmful chemicals, pesticides, and synthetic materials. Experience the gentle touch of nature with every use.",
            "category": "Womens Sanitary",
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
        setDetails(data); // Initialize details state with data array
    }, []); // Empty dependency array to run this effect only once after initial render

    function openProduct(product) {
        navigate("/product", { state: product }); // Navigate to "/product" with product data
    }

    return (
        <div className="">
            <div className="main row justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-5 mt-2 p-4">
                {details.map((product, index) => (
                    <div className="col" key={index}>
                        <div className="card border border-0 custom-card text-center h-100 p-2 d-flex justify-content-center align-items-center">
                            <div className="">
                                <img
                                    src={product.image}
                                    alt=""
                                    className="d-block mx-auto img-custom"
                                    style={{ width: "150px" }}
                                />
                                <div className="card-body">
                                    <p className="fw-normal">{product.title}</p>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => openProduct(product)}
                                    >
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Supportus;
