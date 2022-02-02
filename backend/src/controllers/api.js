/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
const Api = require("../models/api")


const cloudinary = require('cloudinary').v2;
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET,
  secure: true
});



// add new api to database
exports.addapi = (req, res) =>{
    const {title, desc, photo, author, github, endpoint} = req.body;
    const file = req.files.photo;
    cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
        const data = new Api({title, desc, photo, author, github, endpoint})
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