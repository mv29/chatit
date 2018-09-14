const user = require('../models/model1');

//Simple version, without validation or sanitation
const sports = function (req, res) {
    res.render('sports');
};
exports=module.exports={sports};