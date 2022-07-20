const mongoose=require("mongoose");

const customerSchema=new mongoose.Schema({
userName:{type:string,required:true,unique:true},
email:{type:string,required:true},
password:{type:string,required:true,unique:true},
phoneNumber:{type:number,required:true},
address:{type:string,required:true }

})

module.exports=mongoose.model("Customer",customerSchema);
