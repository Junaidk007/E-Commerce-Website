const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // no need of bcrypt package here

module.exports.generateToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role

        },
        process.env.JWT_SECRET,
        { expiresIn: '2d' }
    )
}