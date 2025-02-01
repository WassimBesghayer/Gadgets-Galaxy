const expres=require("express");
const Order = require("../models/order");

const orderRouter=expres.Router();

// add order
orderRouter.post("/add", async(req,res)=>{
    try {
        let neworder=new Order(req.body);
        let result=await neworder.save();
        res.send({order:result, msg:"order is added successfully !"})
    }
    catch (error) {
        console.log(error)
        
    }
})

// get all orders
orderRouter.get("/", async(req,res)=>{
    try {
        let result=await Order.find();
        res.send({orders:result, msg:"These are all your orders !"})
    }
    catch (error) {
        console.log(error)
        
    }
})

// delete order
orderRouter.delete("/:id", async(req,res)=>{
    try {
        let result=await Order.findByIdAndDelete(req.params.id);
        res.send({order:result, msg:"order is deleted successfully !"})
    }
    catch (error) {
        console.log(error)
        
    }
})

// update order
orderRouter.put("/:id", async(req,res)=>{
    try {
        let result=await Order.findByIdAndUpdate(
            {_id:req.params.id},{$set:{...req.body}}
        );
        res.send({order:result, msg:"order is updated successfully !"})
    }
    catch (error) {
        console.log(error)
        
    }
})



module.exports=orderRouter;