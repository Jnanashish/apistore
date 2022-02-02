/* eslint-disable prettier/prettier */
 var express = require("express");

var router = express.Router();     
const {addapi} = require("../controllers/api")





router.post("/addapi", addapi);



module.exports = router; 