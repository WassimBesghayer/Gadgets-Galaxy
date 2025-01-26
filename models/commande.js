const mongoose=require("mongoose");
const schema=mongoose.Schema;

const commandeSchema = new schema({
    nameUser:String,
    nameProduct:String,
    price:Number,
    date:String,
});

const Commande = mongoose.model('Commande',commandeschema);
module.exports=Commande;