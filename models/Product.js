const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
name:{type:string,required:true,unique:true},
about:{type:string,required:true},
img:{type:string},
category:{type:array,required:true},
size:{type:string},
color:{type:string},
price:{type:number,required:true}
});

module.exports=mongoose.model("Product",productSchema);
