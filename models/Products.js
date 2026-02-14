const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    quantaty:{
        type: String,
        required: true,
       
    },
    price:{
        type: Number,
        required: true,
    
    },
   
},{timestams:true})

const Product = mongoose.model("Product",productSchema);

module.exports = Product;
