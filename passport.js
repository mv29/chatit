const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/model1');
const FacebookStrategy =require('passport-facebook').Strategy;
const GitHub =require('passport-github').Strategy;
const Twitter =require('passport-twitter').Strategy;

passport.serializeUser((user, done) => {
    return done(null, user.id)
});

passport.deserializeUser((userId, done) => {
    User.findOne({_id: userId}, function(err, user)
    {
       if(err)
           console.log(err);
       done(null,user);
    });
});
const localStrategy = new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    function(username, password, done) {
       User.findOne({ // searching int the user table for an object with name username
                email: username,
                password:password
        },function(err,user)
            {
                if (err){
                    return err;
                }
                if( user && user !== "null" && user !== "undefined" ){
                    return done(null,user);
                }
                else
                {
                    return done(null,false,{message: 'wrong username or password'})
                }

            }
        )});
const github = new GitHub({

        clientID        : 'f44343ebb6ea1877bb59',
        clientSecret    : '4458db673ee13bfea3a5fc70f110b47130da58ba',
        scallbackURL     : "http://localhost:3210/login/github/callback",
    },
    function(token, refreshToken, profile, done) {

        //console.log(profile);
        process.nextTick(function() {
            User.findOne({
                where: {
                    name: profile.username
                }
            }).then((user) => {
                // user is the object returned by the findone function User id is the table {always the name of returned object and the table name should be different}
                // if the user is found, then log them in
                console.log(user);
                if (user) {
                    return done(null, user); // user found, return that user
                } else {
                    // if there is no user found with that facebook id, create them
                    User.create({
                        name: profile.username
                    }).then((user) => {
                        return done(null, user); // user created
                    }).catch((err) => {
                        return done(err)
                    });
                }
            }).catch((err) => {
                return done(err)
            })
        });
    });

const twitter = new Twitter({

        consumerKey        : 'RiYTC2IglSuRt3SEJaL08pzSQ',
        consumerSecret    : 'IKOu6IYW1Y4T8aJo52ktlmqjBgKMSNIgW273YUI89LHILSXmMy',
        callbackURL     : "http://localhost:3210/login/twitter/callback",
    },
    function(token, refreshToken, profile, done) {

        console.log(profile);
        process.nextTick(function() {
            user.findOne({
                where: {
                    name: profile.username
                }
            }).then((user) => {
                // user is the object returned by the findone function User id is the table {always the name of returned object and the table name should be different}
                // if the user is found, then log them in
                console.log(user);
                if (user) {
                    return done(null, user); // user found, return that user
                } else {
                    // if there is no user found with that facebook id, create them
                    User.create({
                        name: profile.username
                    }).then((user) => {
                        return done(null, user); // user created
                    }).catch((err) => {
                        return done(err)
                    });
                }
            }).catch((err) => {
                return done(err)
            })
        });
    });


const facebook= new FacebookStrategy({

        clientID        : '366347730509848',
        clientSecret    : 'dcf4c9cdf89f318082d7c55794dcd942',
        callbackURL     : "http://localhost:3210/login/facebook/callback",
        profileFields: ['id', 'displayName', 'email', 'birthday', 'friends', 'first_name', 'last_name', 'middle_name', 'gender', 'link']
    },
    function(token, refreshToken, profile, done) {

        console.log(profile);
        process.nextTick(function() {
            User.findOne({
                where: {
                    name: profile.displayName
                }
            }).then((user) => {
                // if the user is found, then log them in
                if (user) {
                    return done(null, user); // user found, return that user
                } else {
                    // if there is no user found with that facebook id, create them
                    User.create({
                        name:profile.displayName
                    }).then((user) => {
                        return done(null, user); // user created
                    }).catch((err) => {
                        return done(err)
                    })
                }
            }).catch((err) => {
                return done(err)
            })
        });
    });
passport.use(localStrategy);
passport.use(github);
passport.use(facebook);
passport.use(twitter);
module.exports = exports= passport;