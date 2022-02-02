/* eslint-disable prettier/prettier */
 var express = require("express");

const { check } = require("express-validator");
var router = express.Router();
const { signup, signin, isSignedIn} = require("../controllers/auth")

// router.get("/signout", signout);

router.post("/signup",[
    check("email","email is required").isEmail(),
    check("name","Name is required").isEmail(),
    check("password", "password should be at least 3 char").isLength({min: 3})
], signup);


router.post("/signin",[
    check("email","email is required").isEmail(),
    check("password", "password field is required").isLength({min: 1})
], signin);


router.get("/testroute", isSignedIn,  (req, res)=>{
    res.json(req.auth)
})


module.exports = router;  
