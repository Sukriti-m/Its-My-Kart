const mongoose=require("mongoose");

const orderSchema=new mongoose.Schema({
customerId:{type: mongoose.Schema.Types.ObjectId,
ref:"Customer"},
products:[{productId:{type: mongoose.Schema.Types.ObjectId,
    ref:"Product"},
quantity:{type:Number,
    default:1}}],
totalCost:{type:Number,default:0},
status:{type:String,default:"pending"}
});

module.exports=mongoose.model("order",orderSchema);
