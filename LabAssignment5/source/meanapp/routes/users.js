const express = require('express');
const router = express.Router();

// Register User
router.post('/register', function(req, res, next) {
    res.send('Register');
});

// Authenticate
router.post('/authenticate', function(req, res, next) {
    res.send('Authenticate');
});

// Profile
router.get('/profile', function(req, res, next) {
    res.send('Profile');
});

module.exports = router;