const expres=require("express");
const productRouter=expres.Router();

// add product
productRouter.post("/add", async(req,res)=>{
    try {
        let newproduct=new productRouter(req.body);
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
        res.send({product:result, msg:"These are all your products !"})
    }
    catch (error) {
        console.log(error)
        
    }
})

// delete product
productRouter.delete("/:id", async(req,res)=>{
    try {
        let result=await product.findByIdAndDelete(req.params.id);
        res.send({product:result, msg:"product is deleted successfully !"})
    }
    catch (error) {
        console.log(error)
        
    }
})

// update product
productRouter.put("/:id", async(req,res)=>{
    try {
        let result=await product.findByIdAndUpdate(
            {_id:req.params.id},{_set:{..req.body}}
        );
        res.send({product:result, msg:"product is updated successfully !"})
    }
    catch (error) {
        console.log(error)
        
    }
})



module.exports=productRouter;