const express = require('express');
const dotenv =require('dotenv');


//? load  environment variable from .env file
dotenv.config();

//! create express application
const app= express();

//! create route '/'
app.get('/',(req,res)=>{
    res.send("Welcome to sanjeet API");
})

//! start sever.js
const PORT=process.env.PORT || 9080
app.listen(PORT,()=>{
    console.log(`server is running port ${PORT}`)
})