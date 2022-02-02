/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
// const { ObjectId } = mongoose.Schema;
const Schema = mongoose.Schema;


const ApiSchema = new mongoose.Schema({
    title : {
       type: String,     
    },
    desc : {
      type: {},
    },
    photo : {
      type: String
    },
    viewcount : {
        type : Number,
    
    },
    likecount : {
        type : Number, 
    },
    dislikecount : {
        type : Number,
    },
    author : {
        type: Schema.Types.ObjectId,
    },
    github : {
        type : String
    },
    endpoint : {
        type : String,
    }

})


module.exports = mongoose.model('apis', ApiSchema);