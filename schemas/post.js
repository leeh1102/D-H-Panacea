
const mongoose = require('mongoose');
const { Schema } = mongoose;
const postSchema = new Schema({
    title: String,
    contactNumber: String,
    description: String,
    contactEmail: String,
    serviceLocation: String,
    serviceType: String, // This is a string for now, but it should be an array of strings
    hours: String,
    userType: String,
    school: String, // only if userType == studentPhysician
    postDate: String, // This is a string for now, but it should be a date
})

module.exports.postSchema = postSchema;
module.exports.Post = mongoose.model('Post', postSchema);
