const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { generateToken } = require('../utils/generateToken');

// Register a new user
module.exports.registerController = async (req, res) => {
   try {
    const { name, email, password } = req.body;

    // Check if the user already exists  
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.status(400).json({
            message: 'User already exists',
            success: false
        });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // creating a new user
    const newUser = new User({
        name: name,
        email: email,
        password: hashedPassword
    });

    // Save the new user to the database
    await newUser.save();

    res.status(201).json({
        message: 'User registered successfully',
        success: true
    });

    } catch (error) {
        res.status(500).json({
            message: 'Error registering user',
            success: false
        });
    }
};


// ---------------------------------login controller------------------------------------------------------
module.exports.loginController = async (req, res) => { 
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        // check if user exists
        if (!user) {
            return res.status(400).json({ 
                message: "User not found with the provided email", 
                success: false 
            });
        }

        // check if password is correct
        const isPasswordCorrect = await bcrypt.compare(password, user.password); 

        // if password incorrect
        if (!isPasswordCorrect) {
            return res.status(400).json({ 
                message: "Invalid email or password", 
                success: false 
            });
        }

        // generate token
        const token = generateToken(user);

        res.status(200).json({
            message: "Login successful",
            success: true,
            token: token
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

