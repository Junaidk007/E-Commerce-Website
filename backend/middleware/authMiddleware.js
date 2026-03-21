
const jwt = require("jsonwebtoken"); 
module.exports.userVerify = (req, res, next) => { 
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json
        ({ message: "No token provided" ,
        success: false });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 
        res.user = decoded; 
    } catch (error) {
        console.log(`error in user verification: ${error.message}`)
        return res.status(401).json({ 
            message: "Invalid token" , success: false
        });
    }
 }