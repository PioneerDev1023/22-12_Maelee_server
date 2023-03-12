const express = require('express');
const router = express.Router();
const User = require('../model/user');

// Define your get users endpoint
router.get('/', async (request, response) => {
    try {
        const totalUsers = await User.find({ role: 2});
        return response.status(200).json({ data: totalUsers });
    } catch (err) {
        return response.status(400).json({ error_msg: err.message });
        // throw Error(err);
    }
});

module.exports = router;