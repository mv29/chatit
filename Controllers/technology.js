const user = require('../models/model1');

//Simple version, without validation or sanitation
const technology1=[];
const technology = function (req, res) {
    console.log(technology1);
    res.render('technology',{message:technology1});
};
const message = function (req, res) { // storing the 50 previous messages
    //console.log(req.query.x);
    if (technology1.length>50)
    {
        technology1.shift();
    }
    technology1.push({mess:req.query.x,user:req.query.y});

};

exports=module.exports={technology,message};