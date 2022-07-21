const router=require("express").Router();
const Product=require("../models/Product");

//Add Product

router.post("/add",async (req,res)=>{try{
    const {name,about,category,size,color,price}=await req.body;
const productExist= await Product.findOne({name});
if(productExist)
{return res.status(200).json("Product already exists.");}

const newProduct=await Product.create({
name,
about,
category,
size,
color,
price
});
const saveProduct=await newProduct.save();
res.status(200).json(saveProduct);
}
catch(err)
{res.status(500).json(err);}
});

//Edit Product

router.put("/:id",async(req,res)=>{try{
const idProduct=Product.find({_id:req.params.id});
if(!idProduct)
return res.status(200).json("Product id not found.");
const updateProduct= await Product.findByIdAndUpdate(req.params.id, {
$set:req.body
});
res.status(200).json(updateProduct);
}
catch(err)
{res.status(500).json(err);}
});


//Delete Product

router.delete("/:id",async(req,res)=>{try{
const idProduct=Product.find({_id:req.params.id});
if(!idProduct)
return res.status(200).json("Product id not found.");
await Product.findByIdAndDelete(req.params.id);
res.status(200).json("Product data deleted");
}
catch(err)
{res.status(500).json(err);}
});

//View Product

router.get("/:id",async(req,res)=>{try{
const idProduct=await Product.findById(req.params.id);
if(!idProduct)
return res.status(200).json("Product id not found.");

res.status(200).json(idProduct);
}
catch(err)
{res.status(500).json(err);}
});

module.exports=router;