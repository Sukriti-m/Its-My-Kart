const mongoose=require("mongoose");

const orderSchema=new mongoose.Schema({
customerId:{type:Schema.Types.ObjectId,
ref:"Customer"},
products:[{productId:{type:Schema.Types.ObjectId,
    ref:"Product"},
quantity:{type:number,
    default:1}}],
totalCost:{type:number,required:true},
status:{type:string,default:"pending"}
});

module.exports=mongoose.model("order",orderSchema);
