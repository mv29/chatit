const user = require('../models/model1');

//Simple version, without validation or sanitation
const education1=[];
const education = function (req, res) {
    console.log(education1);
    res.render('education',{message:education1});
};
const message = function (req, res) { // storing the 50 previous messages
    //console.log(req.query.x);
    if (education1.length>50)
    {
        education1.shift();
    }
    education1.push({mess:req.query.x,user:req.query.y});

};

exports=module.exports={education,message};