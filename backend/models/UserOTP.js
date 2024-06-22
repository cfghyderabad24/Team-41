const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        expires: 120, 
    },
});

const userotp = mongoose.model('UserOTP', otpSchema);
module.exports = userotp;
