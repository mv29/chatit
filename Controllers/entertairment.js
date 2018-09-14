const user = require('../models/model1');

//Simple version, without validation or sanitation
const entertairment = function (req, res) {
    res.render('entertairment');
};
exports=module.exports={entertairment};