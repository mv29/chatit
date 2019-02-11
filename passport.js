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

passport.use(localStrategy);
module.exports = exports= passport;