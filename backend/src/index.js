const mongoose = require("mongoose");
const express = require("express");
require('dotenv').config()
const app = express();


// import the middlewares
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");


// import the Routes 
const authRoutes = require("./routes/auth");


// db connections
mongoose.connect(process.env.DATABASE,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true ,
    useCreateIndex:true
}).then(()=>{
    console.log("DB CONNECTED");
}).catch(()=>{
    console.log("Cannot connect to DB");
})

// middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


// routes
// when visit api run authroute, need to prefix api before all 
app.use("/api", authRoutes);   

// port
const port = process.env.port || 8000;

app.listen(port, ()=>{
    console.log(`App is running at port ${port}`);
})