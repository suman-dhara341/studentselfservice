const User = require('../models/userModel')
const registration = async (req, res) => {
    try {

        const { userClass, section, rollNumber, password } = req.body;
        if (!userClass || !section || !rollNumber || !password) {
            return res.status(400).send("All fields are required.");
        }
        const FindUser = await User.findOne({ rollNumber })

        if (FindUser) {
            return res.status(400).send("User already exists");
        }

        const newUser =new User({
            userClass,
            section,
            rollNumber,
            password
        })

        await newUser.save();
        return res.status(200).send("Registration successful ")

    } catch (error) {
        res.status(500).send("An error occurred during registration");
    }
}

module.exports = { registration };
