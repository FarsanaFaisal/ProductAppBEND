const mongoose = require('mongoose');

 var schema=mongoose.Schema({
    Name:String,
    Disc:String,
    price:Number,
    Image:String
 }) 
  
 var productMOdel=mongoose.model("product55",schema)
 module.exports=productMOdel 