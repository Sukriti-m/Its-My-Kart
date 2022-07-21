require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const app=express();
const customerRoute=require("./routes/customer");
const orderRoute=require("./routes/order");
const productRoute=require("./routes/product");
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("DB connection successfull"))
.catch((err)=>{console.log(err)});

app.get("/",(req,res)=>{
res.send("API working successfully.");
});

app.use(express.json());
app.use("/customer",customerRoute);
app.use("/order",orderRoute);
app.use("/product",productRoute);
app.listen(process.env.PORT ||3000,(err)=>{if(!err) console.log("Server Started");
else
console.log(err);});