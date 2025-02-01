const express=require("express");
const app=express();
const cors=require("cors");
const db_connect=require("./connect")

require("dotenv").config();
db_connect()

app.use(express.json())
app.use(cors());
app.use("/product", require("./routes/product"))
app.use("/order", require("./routes/order"))

app.listen(process.env.port, (err)=>err?console.log(err):console.log("server is runnig well !"))