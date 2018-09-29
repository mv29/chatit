const user = require('../models/model1');

//Simple version, without validation or sanitation
const travelling1=[];
const travelling = function (req, res) {
    console.log(travelling1);
    res.render('travelling',{message:travelling1});
};
const message = function (req, res) { // storing the 50 previous messages
    //console.log(req.query.x);
    if (travelling1.length>50)
    {
        travelling1.shift();
    }
    travelling1.push({mess:req.query.x,user:req.query.y});

};

exports=module.exports={travelling,message};