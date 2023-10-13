const express = require('express');
const Post = require('../models/postModel');

const getPosts = ( async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = getPosts
