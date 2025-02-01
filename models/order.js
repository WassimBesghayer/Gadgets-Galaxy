const mongoose=require("mongoose");
const schema=mongoose.Schema;

const orderSchema = new schema({
    nameUser:String,
    nameProduct:String,
    price:Number,
    date:String,
});

const Order = mongoose.model('Order',orderSchema);
module.exports=Order;