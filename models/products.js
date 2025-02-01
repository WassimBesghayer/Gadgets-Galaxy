const mongoose=require("mongoose");
const schema=mongoose.Schema;

const productSchema = new schema({
    title: String, // String is shorthand for {type: String}
    img:String,
    description:String,
    price:Number,
    category:{type:String, default:"all"}
});

const Product = mongoose.model('Product',productSchema);
module.exports=Product;