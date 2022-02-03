/* eslint-disable prettier/prettier */
var express = require("express");
var router = express.Router();

const { check } = require("express-validator");

// import controller methods
const { signup, signin, isSignedIn} = require("../controllers/auth")


// sign up new user
router.post("/signup",[
    check("email","email is required").isEmail(),
    check("name","Name is required").isEmail(),
    check("password", "password should be at least 3 char").isLength({min: 3})
], signup);


// sign in new user
router.post("/signin",[
    check("email","email is required").isEmail(),
    check("password", "password field is required").isLength({min: 1})
], signin);


module.exports = router;  
