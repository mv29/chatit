const user = require('../models/model1');

//Simple version, without validation or sanitation
const politics = function (req, res) {
    res.render('politics');
};
exports=module.exports={politics};