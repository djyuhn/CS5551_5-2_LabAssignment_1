const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

// Register User
router.post('/register', function(req, res, next) {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, function(err, user) {
        if(err) {
            res.json({succcess: false, msg:'Failed to register the user'});
        }
        else {
            res.json({succcess: true, msg:'User is registered'})
        }
    });
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