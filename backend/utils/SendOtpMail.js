const nodemailer = require('nodemailer');

const sendMail = async(rotp,sent_to, sent_from)=>{
    const otp = rotp
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        PORT: "587",
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS,
        },
        tls:{
            rejectUnauthorized:false,
        }
    })
    const options = {
        from : {
            name:"Team 41",
            address:sent_from,
        },
        to : sent_to,
        subject: "Team 41",
        //html: htmlMessage,
        html: `<h1 align="center">Your OTP is ${otp}</h1>
                <p align="center">The OTP will be Expired in 2 mins.</p>
        `,
    }

    //Send Mail
    transporter.sendMail(options,function(err,info){
        if(err){
            console.log(err)
        }
        else{
            console.log("Email sent successfully");
        }
    })
}
module.exports = sendMail