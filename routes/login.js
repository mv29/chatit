const router = require('express').Router();
const login = require('../Controllers/login').login1;
const passport = require('../passport');


router.post('/',
    passport.authenticate('local', { failureRedirect: '/login',failureFlash: false }),
    function(req, res) {
        res.redirect("/home");
    });
router.get('/',login);

module.exports=exports = router;
