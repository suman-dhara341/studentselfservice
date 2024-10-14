const User = require('../models/userModel');

const admin = async (req, res) => {
    try {
        const data=await User.find();
        if(!data){
            console.log("No data found");
        }
        res.status(200).send(data)
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("An error occurred during login.");
    }
};

module.exports = { admin };
