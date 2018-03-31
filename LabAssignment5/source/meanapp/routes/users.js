const express = require('express');
const router = express.Router();

// Register User
router.get('/register', function(req, res, next) {
    res.send('Register');
});

// Authenticate
router.get('/authenticate', function(req, res, next) {
    res.send('Authenticate');
});

// Profile
router.get('/profile', function(req, res, next) {
    res.send('Profile');
});

// Validate
router.get('/validate', function(req, res, next) {
    res.send('Validate');
});

module.exports = router;