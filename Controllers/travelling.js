const user = require('../models/model1');

//Simple version, without validation or sanitation
const travelling = function (req, res) {
    res.render('travel');
};
exports=module.exports={travelling};