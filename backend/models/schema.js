var mongoose = require("mongoose");

const schema = new mongoose.Schema({
    imgName: {
        type:String,
        required:true
    },
    imgDetails: {
        type:String,
        required:true
    },
    imgURL: {
        type:String,
        required:true
    }
},{ timestamps: true });

const Images = mongoose.model('image', schema);

module.exports = Images;