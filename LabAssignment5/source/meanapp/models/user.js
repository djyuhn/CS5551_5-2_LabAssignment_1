const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    about: {
        type: String
    },
    hobbies: {
        type: String
    },
    likes: {
        type: String
    },
    dislikes: {
        type: String
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
    const query = {username: username}
    User.findOne(query, callback);
}

module.exports.editUserByUsername = function(user, callback) {
    const query = {username: user.username}
    User.findOneAndUpdate(
        query,
        {$set:{
            username: user.username,
            email: user.email,
            about: user.about,
            hobbies: user.hobbies,
            likes: user.likes,
            dislikes: user.dislikes
        }},
        {new: true},
        function(err, doc) {
            if(err) {
                console.log("Something wrong when updating user!");
            }

            console.log(doc);
        }
    )
}

// Encypt User Password
module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    });
}