var Image = require('../models/schema.js');
const ApiFeatures = require('../utils/apifeatures.js');

exports.home = async (req,res)=>{
    // console.log("aidufa");   
    const apiFeature = new ApiFeatures(Image.find(), req.query).searchImage();
    let images = await apiFeature.query;
    const perPageItem = 9;
    apiFeature.pagination(perPageItem);
    images = await apiFeature.query.clone();
    try{
        res.status(200).json({
            success:true,
            images
        })
    }catch(e){
        res.status(401).json(`Error ${e}`)
    }
}

exports.addimg = async (req,res)=>{
    try{
        let newimage=await Image.create(req.body);

        res.status(200).json({
            success:true,
            newimage
        })
    }catch(e){
        res.status(401).json(`Error ${e}`)
    }
}

exports.editimg = async (req,res)=>{
    try{
        let image = await Image.findOne({id:req.params.id});
        image.imgDetails = req.body.imgDetails;
        image.imgURL = req.body.imgURL;
        image.save();

        res.status(200).json({
            success:true,
            message: "Edited Image"
        })
    }catch(e){
        res.status(401).json(`Error ${e}`)
    }
}

exports.deleteimg = async (req,res)=>{
    try{
        await Image.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success:true,
            message: "Deleted Image"
        })
    }catch(e){
        res.status(401).json(`Error ${e}`)
    }
}

exports.showimg = async (req,res)=>{
    try{
        let image = await Image.findById(req.params.id);

        res.status(200).json({
            success:true,
            image
        })
    }catch(e){
        res.status(401).json(`Error ${e}`)
    }
}