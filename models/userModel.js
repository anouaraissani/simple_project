const mongoose = require('mongoose');
// Creating userModel
const userSchema = new mongoose.Schema({ 
	username: { type: String, unique: true },
	email: String 
}) 

const User = mongoose.model('User', userSchema); 

module.exports = User
