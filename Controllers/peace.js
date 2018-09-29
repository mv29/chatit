const user = require('../models/model1');

//Simple version, without validation or sanitation
const peace1=[];
const peace = function (req, res) {
    console.log(peace1);
    res.render('peace',{message:peace1});
};
const message = function (req, res) { // storing the 50 previous messages
    //console.log(req.query.x);
    if (peace1.length>50)
    {
        peace1.shift();
    }
    peace1.push({mess:req.query.x,user:req.query.y})

};

exports=module.exports={peace,message};