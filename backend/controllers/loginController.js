const Login = require('../models/Login');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotEnv = require('dotenv')
const userotp = require('../models/UserOTP');
const sendMail = require('../utils/SendOtpMail');
const genotp = require("../utils/generateOtp")
dotEnv.config();
const secretKey = process.env.WhatIsYourName

const donorRegister = async (req, res)=>{
    const {username, email, password} = req.body;
    try{
        const donorEmail = await Login.findOne({email});
        if(donorEmail){
            return res.status(400).json("Email already taken");
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newDonor = new Login({ 
            username,
            email,
            password: hashedPassword
        });
        await newDonor.save();

        res.status(201).json({message: "Donor registered succesfully"});
        console.log('registered')

    }catch(error){
        console.error(error);
        res.status(500).json({error: "Internal Server Error"})
    }

}
// const donorLogin = async(req, res)=>{
//     const {username, password} = req.body;
//     try{
//         const donor = await Login.findOne({username});
//         if(!donor || !(await bcrypt.compare(password, donor.password))){
//             return res.status(401).json({error: "Invalid username or password"});
//         }

//         const token =jwt.sign({donorId: donor._id}, secretKey, {expiresIn: "1h"} )
//         res.status(200).json({success: "Login Successful", token})
//         console.log(email, "this is token", token);

//     }catch(error){ 
//       console.log(error);
//       res.status(500).json({error: "Internal server error"});

//     }
// }
const donorLogin = async(req,res)=>{
    try {
        const email = req.body.email;
        // console.log(email)
        const temp = await userotp.findOne({email:email});
        // console.log(temp)
        if(temp!=null){
            userotp.deleteOne({email:email});
        }
        const aotp = genotp();
        const newotp = await userotp.create({
          email: email,
          otp: aotp,
          createdAt: Date.now(),
        });
        // console.log("OTP document created:", newotp);
        const sent_to = email;
        const sent_from = process.env.EMAIL_USER;
        await sendMail(aotp, sent_to, sent_from);
        res.status(200).send("Email OTP Sent Successfully!")
    } catch (e) {
        res.send(e.message)
    }
   
}
const loginVerification = async(req,res)=>{
    try{
        const { otp } = req.body;
        const email = req.params.email;
        const user = userotp.findOne({email:email,otp:otp})
        if(user!=null){
            res.status(200).send("OTP Verified!")
        }
        else{
            res.status(404).send("User NOt Found!")
        }
    }
    catch(e){
        res.status(500).send(e.message);
    }
}
module.exports = {donorRegister, donorLogin, loginVerification}
