const user = require('../models/model1');

//Simple version, without validation or sanitation
const home1 = function (req, res) {
    res.render('home');
};
const home2 = function (req, res) {
    if (req.user)
    {
        res.send(req.user.email);
    }
};
exports=module.exports={home1, home2};