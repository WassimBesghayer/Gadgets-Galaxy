const expres=require("express");
const Commande=require("../models/commande")
const commandeRouter=expres.Router();

// add commande
commandeRouter.post("/add", async(req,res)=>{
    try {
        let newcommande=new Commande(req.body);
        let result=await newcommande.save();
        res.send({commande:result, msg:"commande is added successfully !"})
    }
    catch (error) {
        console.log(error)
        
    }
})

// get all commandes
commandeRouter.get("/", async(req,res)=>{
    try {
        let result=await Commande.find();
        res.send({commande:result, msg:"These are all your commandes !"})
    }
    catch (error) {
        console.log(error)
        
    }
})

// delete commande
commandeRouter.delete("/:id", async(req,res)=>{
    try {
        let result=await Commande.findByIdAndDelete(req.params.id);
        res.send({commande:result, msg:"commande is deleted successfully !"})
    }
    catch (error) {
        console.log(error)
        
    }
})

// update commande
commandeRouter.put("/:id", async(req,res)=>{
    try {
        let result=await Commande.findByIdAndUpdate(
            {_id:req.params.id},{_set:{..req.body}}
        );
        res.send({commande:result, msg:"commande is updated successfully !"})
    }
    catch (error) {
        console.log(error)
        
    }
})



module.exports=commandeRouter;