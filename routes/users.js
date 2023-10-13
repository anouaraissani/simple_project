const express = require('express');
const router = express.Router();
const getUsers = require('../controllers/userControllers')

// Get all users
router.route('/').get(getUsers);

module.exports = router;

