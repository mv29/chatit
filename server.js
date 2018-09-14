const express = require('express');
const app =express();
const hbs = require('express-hbs');
const path = require('path');
const session = require('express-session');
const passport = require('./passport');


//express.json parses incoming requests with JSON payloads
// payloads are important information in the json object
// express.urlencoded parses incoming requests with URL-encoded payloads
// body_parser.json and express.json both do the same thing

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: 'lsdgdkhfbdkgbdk',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());



// database connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sellkar');
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// socket connection
const server = require('http').Server(app);
require("./socket")(server);


// routes
app.use('/signup',require('./routes/signup'));
app.use('/login',require('./routes/login'));
app.use('/profile',require('./routes/profile'));
app.use('/home',require('./routes/home'));
app.use('/education',require('./routes/education'));
app.use('/peace',require('./routes/peace'));
app.use('/sports',require('./routes/sports'));
app.use('/politics',require('./routes/politics'));
app.use('/entertairment',require('./routes/entertairment'));
app.use('/travelling',require('./routes/travelling'));
app.use('/fitness',require('./routes/fitness'));
app.use('/love',require('./routes/love'));
app.use('/technology',require('./routes/technology'));

// hbs
app.set('view engine', 'hbs');
app.engine('hbs', hbs.express4({
    defaultLayout: path.join(__dirname, 'views/layout.hbs'),
    //partialsDir: path.join(__dirname, 'views/partials'),
    layoutsDir: path.join(__dirname, 'views/layouts')
}));


// other stuff
app.set('views', path.join(__dirname, 'views/pages'));
app.use('/', express.static(__dirname + '/public')); // app.use returns a function

server.listen('3210',()=> {  // inline arrow function
    console.log("server running on http://localhost:3210");
});

