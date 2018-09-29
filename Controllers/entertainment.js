const user = require('../models/model1');

//Simple version, without validation or sanitation
const entertainment1=[];
const entertainment = function (req, res) {
    console.log(entertainment1);
    res.render('entertainment',{message:entertainment1});
};
const message = function (req, res) { // storing the 50 previous messages
    //console.log(req.query.x);
    if (entertainment1.length>50)
    {
        entertainment1.shift();
    }
    entertainment1.push({mess:req.query.x,user:req.query.y});

};

exports=module.exports={entertainment,message};