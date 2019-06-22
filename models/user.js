const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    userName: String,
    password: String,
    age: String,
    location: String,
    bio: String,
    title: String
});

const User = mongoose.model("User", UserSchema);

module.exports = User;