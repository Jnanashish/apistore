/* eslint-disable prettier/prettier */
const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const app = express();


// import the middlewares
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");


// import the Routes 
const authRoutes = require("./routes/auth");
const apiRoutes = require("./routes/api");


console.log(process.env.DATABASE);

// db connections
mongoose.connect(process.env.DATABASE,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true ,
}).then(()=>{
    console.log("DB CONNECTED");
// eslint-disable-next-line prettier/prettier
}).catch((err)=>{
    console.log(err);
    console.log("Cannot connect to DB");
})

// middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


// routes
// when visit api run authroute, need to prefix api before all 
app.use("/api", authRoutes);   
app.use("/api", apiRoutes);   

// port
const port = process.env.port || 8000;

app.listen(port, ()=>{
    console.log(`App is running at port ${port}`);
})