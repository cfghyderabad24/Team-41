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