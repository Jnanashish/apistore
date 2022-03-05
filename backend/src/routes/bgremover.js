var express = require("express");
var router = express.Router();  


import removebg from "../controllers/bgremover";
router.post("/removebg", removebg);


module.exports = router; 