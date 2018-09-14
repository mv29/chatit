const user = require('../models/model1');

//Simple version, without validation or sanitation
const technology = function (req, res) {
    res.render('technology');
};
exports=module.exports={technology};