const user = require('../models/model1');

//Simple version, without validation or sanitation
const peace = function (req, res) {
    res.render('peace');
};
exports=module.exports={peace};
