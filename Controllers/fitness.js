const user = require('../models/model1');

//Simple version, without validation or sanitation
const fitness = function (req, res) {
    res.render('fitness');
};
exports=module.exports={fitness};