const user = require('../models/model1');

//Simple version, without validation or sanitation
const sports1=[];
const sports = function (req, res) {
    console.log(sports1);
    res.render('sports',{message:sports1});
};
const message = function (req, res) { // storing the 50 previous messages
    //console.log(req.query.x);
    if (sports1.length>50)
    {
        sports1.shift();
    }
    sports1.push({mess:req.query.x,user:req.query.y});

};

exports=module.exports={sports,message};