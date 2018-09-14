const Product = require('../models/model1');

//Simple version, without validation or sanitation
const profile1 = function (req, res) {
     if (!req.user )// if user is not logged in
     return res.redirect('/login');
     res.render('profile',{});
};

const friend = function (req, res) {
    if (!req.user )// if user is not logged in
        return res.redirect('/login');
    res.render('profile');
};

exports=module.exports={profile1,friend};