const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = Schema({
     name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "admin"], // enum means that the value of role can only be either "user" or "admin"
        default: "user"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true }) // timestamps: true will automatically add createdAt and updatedAt fields to the schema, which will be automatically updated by Mongoose when a document is created or updated.

const User = mongoose.model("User", userSchema);
module.exports = User; 
