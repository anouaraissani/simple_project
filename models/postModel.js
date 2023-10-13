const mongoose = require('mongoose');

// Creating postModel
const postSchema = new mongoose.Schema({ 
	title: { type: String, unique: true },
	postedBy: { 
		type: mongoose.Schema.Types.ObjectId, 
		ref: "User"
	} 
}) 


const Post = mongoose.model('Post', postSchema); 

module.exports = Post