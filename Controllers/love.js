const user = require('../models/model1');

//Simple version, without validation or sanitation
const love1=[];
const love = function (req, res) {
    console.log(love1);
    res.render('love',{message:love1});
};
const message = function (req, res) { // storing the 50 previous messages
    //console.log(req.query.x);
    if (love1.length>50)
    {
        love1.shift();
    }
    love1.push({mess:req.query.x,user:req.query.y});

};

exports=module.exports={love,message};