const express = require('express');
const router = express.Router();
const getPosts = require('../controllers/postControlles')

// Get all posts
router.route('/').get(getPosts);

module.exports = router;
