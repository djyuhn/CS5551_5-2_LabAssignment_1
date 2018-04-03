const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const User = require('../models/user');

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var bodyParser = require("body-parser");
var cors = require('cors');
var app = express();
//var url = 'mongodb://<dbuser>:<dbpassword>@ds231199.mlab.com:31199/labassignment5';
var url = 'mongodb://root:admin@ds231199.mlab.com:31199/labassignment5';
router.use(cors());

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

router.put('/update', function(req, res, next) {
    console.log("reached update");
    let newUser = new User({
        email: req.body.email,
        username: req.body.username,
        about: req.body.about,
        hobbies: req.body.hobbies,
        likes: req.body.likes,
        dislikes: req.body.dislikes
    });

    User.editUserByUsername(newUser, function(err, user) {
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
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, function(err, user) {
        if(err) throw err;

        // If User not found, notify client
        if(!user) {
            return res.json({success: false, msg: 'User not found'});
        }

        User.comparePassword(password, user.password, function(err, isMatch) {
            if(err) throw err;
            if(isMatch) {
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800 // 1 week
                });

                // Found user
                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            }
            else {
                return res.json({success: false, msg: 'Password is incorrect'});
            }
        });
    });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), function(req, res, next) {
    res.json({user: req.user});
});

module.exports = router;

var updateUser = function(db, data, callback) {

    console.log(data.user_id);
    var cursor = db.collection('users').updateOne(
        { name: "Stephanie Retzke" },
        {
            $set: {
                email: "updateEmail@gmail.com",
                username: "Changed"
            }

        }
    );

}

