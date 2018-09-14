const user = require('../models/model1');

//Simple version, without validation or sanitation
const love = function (req, res) {
    res.render('love');
};
exports=module.exports={love};