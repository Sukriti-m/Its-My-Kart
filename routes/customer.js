const router=require("express").Router();
const bcrypt=require("bcrypt");
const Customer=require("../models/Customer");

//Add customer

router.post("/add",async (req,res)=>{try{
        const {userName,email,phoneNumber,address,password}=await req.body;
const customerExist= await Customer.findOne({userName});
if(customerExist)
{return res.status(200).json("Customer already exists.");}

const hashedPassword= await bcrypt.hash(password, 10);

const newCustomer=await Customer.create({
userName,
email,
phoneNumber,
address,
password:hashedPassword
});
const saveCustomer=await newCustomer.save();
res.status(200).json(saveCustomer);
}
catch(err)
{res.status(500).json(err);}
});

//Edit customer

router.put("/:id",async(req,res)=>{try{
    const idCustomer=Customer.find({_id:req.params.id});
if(!idCustomer)
return res.status(200).json("Customer id not found.");
const updateCustomer= await Customer.findByIdAndUpdate(req.params.id, {
    $set:req.body
});
res.status(200).json(updateCustomer);
}
catch(err)
{res.status(500).json(err);}
});


//Delete customer

router.delete("/:id",async(req,res)=>{try{
    const idCustomer=Customer.find({_id:req.params.id});
if(!idCustomer)
return res.status(200).json("Customer id not found.");
await Customer.findByIdAndDelete(req.params.id);
res.status(200).json("Customer data deleted");
}
catch(err)
{res.status(500).json(err);}
});

//View customer

router.get("/:id",async(req,res)=>{try{
    const idCustomer=await Customer.findById(req.params.id);
if(!idCustomer)
return res.status(200).json("Customer id not found.");

res.status(200).json(idCustomer);
}
catch(err)
{res.status(500).json(err);}
});

module.exports=router;