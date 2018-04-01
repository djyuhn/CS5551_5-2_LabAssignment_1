const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); //Middleware to parse incoming requests
const cors = require('cors'); //Node module to allow access to any domain
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect to MLab Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', function() {
    console.log('Connected to database ' + config.database);
});

// On Error
mongoose.connection.on('error', function(err) {
    console.log('Database error: ' + err);
});


const app = express();

const port = 3000;

const users = require('./routes/users');

// CORS Middleware 
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

// Index Route
app.get('/', function(req, res) {
    res.send('Invalid Endpoint');
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Express Server
app.listen(port, function() {
    console.log('Server started on port ' + port);
});