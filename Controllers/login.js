const user = require('../models/model1');

//Simple version, without validation or sanitation
const login1 = function (req, res) {
    res.render('login');
};

exports=module.exports={login1};