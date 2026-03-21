const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config(); 


// Importing routes
const authRouter = require('./routes/authRouter'); 



//db connection
const mongoose = require('mongoose');
const connectDB = require('./utils/dbConnect.js');
connectDB();

// Middleware
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


// Routes
app.use('/api/auth', authRouter);


// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} http://localhost:${PORT}`);
});

// SSample route
app.get('/', (req, res) => {
    res.send('Welcome to the E-Commerce API');
});

