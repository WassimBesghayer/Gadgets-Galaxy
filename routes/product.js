const express=require("express");
const Product = require("../models/products");
const productRouter=express.Router();

// add product
productRouter.post("/add", async(req,res)=>{
    try {
        let newproduct=new Product(req.body);
        let result=await newproduct.save();
        res.send({product:result, msg:"product is added successfully !"})
    }
    catch (error) {
        console.log(error)
        
    }
})

// get all products
productRouter.get("/", async(req,res)=>{
    try {
        let result=await Product.find();
        res.send({products:result, msg:"These are all your products !"})
    }
    catch (error) {
        console.log(error)
        
    }
})

// delete product
productRouter.delete("/:id", async(req,res)=>{
    try {
        let result=await Product.findByIdAndDelete(req.params.id);
        res.send({product:result, msg:"product is deleted successfully !"})
    }
    catch (error) {
        console.log(error)
        
    }
})

// update product
productRouter.put("/:id", async(req,res)=>{
    try {
        let result=await Product.findByIdAndUpdate(
            {_id:req.params.id},{$set:{...req.body}}
        );
        res.send({product:result, msg:"product is updated successfully !"})
    }
    catch (error) {
        console.log(error)
        
    }
})



module.exports=productRouter;