const mongoose=require("mongoose");

const db_connect=async()=>{
    try {
        let result = await mongoose.connect(process.env.db_uri);
        console.log("DataBase is conected")
    }
    catch (error) {
        console.log(error)
    }
}

module.exports=db_connect