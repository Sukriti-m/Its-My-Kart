const mongoose=require("mongoose");

const customerSchema=new mongoose.Schema({
userName:{type:String,required:true,unique:true},
email:{type:String ,required:true},
password:{type:String,required:true,unique:true},
phoneNumber:{type:Number,required:true},
address:{type:String,required:true }

})

module.exports=new mongoose.model("Customer",customerSchema);
