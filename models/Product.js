const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
name:{type:String,required:true,unique:true},
about:{type:String,required:true},
img:{type:String},
category:{type:Array,required:true},
size:{type:String},
color:{type:String},
price:{type:Number,required:true}
});

module.exports=mongoose.model("Product",productSchema);
