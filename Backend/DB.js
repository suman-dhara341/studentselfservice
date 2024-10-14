const mongoose = require('mongoose');
require('dotenv').config()



const DB=async()=>{
    try {
        const DB = await mongoose.connect(process.env.DB)
        console.log("DB connection sucessfull");
        
    } catch (error) {
        console.log("DB connection unsucessfull",error);
    }
}


module.exports=DB