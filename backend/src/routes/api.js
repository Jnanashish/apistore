/* eslint-disable prettier/prettier */
var express = require("express");
var router = express.Router();  

// import methods from controller
const {addapi, deleteapi, getapi, updateViewcount} = require("../controllers/api")

// add new api to database
router.post("/addapi", addapi);

// Get api data from database
router.get("/getapi", getapi);

// delete api from database
router.delete("/deleteapi/:id", deleteapi);

// update view count
router.patch("/viewcount", updateViewcount);


module.exports = router; 