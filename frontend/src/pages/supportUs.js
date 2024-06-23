import React, { useEffect, useState } from 'react'; // Correct import statement for useState and useEffect
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router-dom for useNavigate
import Product from './product';
function Supportus() {
    const navigate = useNavigate();
    const [details, setDetails] = useState([]);

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
                                    style={{ width: "400px" , borderRadius:"10px"}}
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
export default SupportUs;
