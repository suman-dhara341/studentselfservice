const User = require('../models/userModel');

const login = async (req, res) => {
    try {
        const { rollNumber, password } = req.body;
        

        if (!rollNumber || !password) {
            return res.status(400).send("Both roll number and password are required.");
        }

        const foundUser = await User.findOne({ rollNumber });
        if (!foundUser) {
            return res.status(401).send("Invalid roll number or password.");
        }

        if (foundUser.password !== password) {
            return res.status(401).send("Invalid roll number or password.");
        }

       
        return res.status(200).send(foundUser);
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("An error occurred during login.");
    }
};

module.exports = { login };
