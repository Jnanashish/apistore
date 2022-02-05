/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
const Api = require("../models/api")
const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
const upload = multer();

const cloudinary = require('cloudinary').v2;
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET,
  secure: true
});



exports.getapi = (req, res) => {
    Api.find()
    .exec((err, result) => {
        if(err){
            return res.status(500).json({
                error : err.message
            })           
        }
        return res.status(200).send(result);
   })    
}


// add new api to database
exports.addapi = (req, res) =>{
    console.log(req.files);
    const {title, desc, author, github, endpoint} = req.body;
    const file = req.files.photo;
    cloudinary.uploader.upload(file.tempFilePath, 
        { transformation: { width: 260, height: 160, crop: "pad" }},              
        (err, result) => {  
        console.log(result);    
        const data = new Api({title, desc, author, github, endpoint, photo : result.secure_url})
        data.save((err, result) => {
            if(err){
                return res.status(500).json({
                    error : "Cannot add data"
                })            
            } 
            return res.status(201).json({
                message : "Data added successfully"
            })         
        })
    })

}

// delete api from database from user based on id
exports.deleteapi = (req, res) =>{
    Api.deleteOne({_id: req.params.id})
    .exec((err, result) => {
        if(err){
            return res.status(500).json({
                error : "Cannot Delete data"
            })           
        }
        return res.status(200).json({
            message: "Deleted Successfully"
        })
   })
}


// increment visit count
exports.updateViewcount = (req, res) => {
    Api.findByIdAndUpdate({ _id: req.params.id},{
        $inc: {"viewcount": 1}          
    }, {
        new: true
    }).exec((err, result) => {
        if(err){
            return res.status(500).json({
                error : err.message
            })           
        }
        return res.status(200).json({
            message: "Clicked"
        })
    })    
}