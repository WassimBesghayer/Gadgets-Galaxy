const express=require("express");
const app=express();
const cors=require("cors");
const db_connect=require("./connect")
require("dotenv").config();
db_connect()

app.use(express.json())
app.use(cors())
app.use("/product", require("./routes/product"))
app.use("/commande", require("./routes/commande"))

app.listen(process.env.port, (err)=>err?console.log(err):console.log("server is runnig well !"))