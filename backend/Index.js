const Razorpay = require('razorpay');
const crypto = require("crypto")
const nodemailer = require('nodemailer');
const express = require("express");
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const loginRoutes = require('./routes/loginRoutes');
const cors = require('cors')



    const app = express();
    app.use(cors());
    const PORT = 4000;
    dotEnv.config();

    mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("MongoDB Connected Successfully!"))
    .catch((error)=> console.log(error))

    app.use(express.json()); 



    app.get('/',(req,res)=>{
        res.send("<h1> Welcome to Good Universe</h1>");
    })
    app.use('/login',loginRoutes);

    
    app.listen(PORT,()=>{
        console.log(`server started and running at ${PORT}`)
    })
    const sendEmail = async (email, orderId, paymentId) => {
        try {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                  user: "b15productpricetracker@gmail.com",
                  pass: "nucvokqwzbgmkogp",
                },
            });
            const mailOptions = {
                from: {
                    name: "B15 Product Pricetracker",
                    address: "b15productpricetracker@gmail.com"
                },
                to: `${email}`,
                subject: "Order Confirmation",
                attachDataUrls:true,
                html: `
                    <h1>Order Confirmation</h1>
                    <p>Order ID: ${orderId}</p>
                    <p>Payment ID: ${paymentId}</p>
                    <p>Thank you for your order!</p>
                    <p>Best regards</p>
                `
            }
            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
        }
        catch (err) {
            console.error('Error sending email:', error);
        }
    }
    
    app.post("/order", async(req, res) => {
        try {
            const razorpay = new Razorpay({
                key_id: "",
                key_secret:""
            })
            if(!req.body) {
                return res.status(400).send("Bad Request");
            }
            const options = req.body;
            // const email = req.body.email;
            console.log(options);
            const order = await razorpay.orders.create(options);
            if(!order) {
                return res.status(400).send("Bad Request");
            }
            res.json(order);
        }
        catch (err){
            console.log(err);
            res.status(500).send(err)
        }
    })
    
    app.post("/validate", async (req, res) => {
    
        const {razorpay_order_id, razorpay_payment_id, razorpay_signature, email} = req.body
    
        const sha = crypto.createHmac("sha256", "");
    
        sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    
        const digest = sha.digest("hex");
    
        if (digest!== razorpay_signature) {
            return res.status(400).json({msg: " Transaction is not legit!"});
        }
        await sendEmail(email, razorpay_order_id, razorpay_payment_id);
        res.json({msg: " Transaction is legit!", orderId: razorpay_order_id,paymentId: razorpay_payment_id});
    })