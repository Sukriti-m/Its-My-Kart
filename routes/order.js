const router=require("express").Router();
const Order=require("../models/Order");
const Customer=require("../models/Customer");
const Product=require("../models/Product");
let i=0;
let totalCost=0;
//Add Order

router.post("/add",async (req,res)=>{try{
    const {customerId,products,status}=await req.body;
const orderExist= await Order.findOne({customerId});
if(orderExist)
{return res.status(200).json("Order already exists.");}

const newOrder=await Order.create({
    customerId,
products,
status
});
const saveOrder=await newOrder.save();
let len=saveOrder.products.length;

for(i=0;i<len;i++)
{
const findProduct=await Product.findById(saveOrder.products[i].productId);
const cost=findProduct.price;
totalCost+=cost*saveOrder.products[i].quantity;
}
await Order.findByIdAndUpdate(saveOrder._id, {
    $set:{totalCost:totalCost }
    });
    totalCost=0;
res.status(200).json(saveOrder);
}
catch(err)
{res.status(500).json(err);}
});

//Edit Order

router.put("/:id",async(req,res)=>{try{
const idOrder=Order.findById(req.params.id);

if(!idOrder)
return res.status(200).json("Order id not found.");
const updateOrder= await Order.findByIdAndUpdate(req.params.id, {
    $set:req.body
    });

let len=updateOrder.products.length;

for(i=0;i<len;i++)
{
const findProduct=await Product.findById(updateOrder.products[i].productId);
const cost=findProduct.price;
totalCost+=cost*updateOrder.products[i].quantity;
}
await Order.findByIdAndUpdate(updateOrder._id, {
    $set:{totalCost:totalCost }
    });
    totalCost=0;
res.status(200).json(updateOrder);
}
catch(err)
{res.status(500).json(err);}
});


//Delete Order

router.delete("/:id",async(req,res)=>{try{
const idOrder=Order.find({_id:req.params.id});
if(!idOrder)
return res.status(200).json("Order id not found.");
await Order.findByIdAndDelete(req.params.id);
res.status(200).json("Order data deleted");
}
catch(err)
{res.status(500).json(err);}
});

//View Order

router.get("/:id",async(req,res)=>{try{
const idOrder=await Order.findById(req.params.id);
if(!idOrder)
return res.status(200).json("Order id not found.");

res.status(200).json(idOrder);
}
catch(err)
{res.status(500).json(err);}
});
module.exports=router;