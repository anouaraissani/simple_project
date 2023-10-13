const express = require('express');
const User = require('../models/userModel');

const getUsers = ( async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = getUsers
