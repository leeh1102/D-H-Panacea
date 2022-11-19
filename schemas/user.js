const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new mongoose.Schema({
    _id: String,
    email: {
        type: String,
        required: [true, "Please provide an Email"],
        unique: [true, "Email already exists"],
    },
    password: {
        type: String,
        required: [true, "Please provide a Password"],
        unique: false,
    }
})

module.exports = mongoose.model('Users', UserSchema);