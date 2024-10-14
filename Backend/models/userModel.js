const mongoose=require('mongoose');



const user=new mongoose.Schema({
    userClass:{
        type:String,
        require: true
    },
    section:{
        type:String,
        require: true
    }
    ,
    rollNumber:{
        type:String,
        require: true
    },
    password:{
        type:String,
        require: true
    }
})

const User = mongoose.model("User", user);
module.exports = User;