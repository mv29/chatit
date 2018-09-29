const user = require('../models/model1');

//Simple version, without validation or sanitation
const politics1=[];
const politics = function (req, res) {
    console.log(politics1);
    res.render('politics',{message:politics1});
};
const message = function (req, res) { // storing the 50 previous messages
    //console.log(req.query.x);
    if (politics1.length>50)
    {
        politics1.shift();
    }
    politics1.push({mess:req.query.x,user:req.query.y});

};

exports=module.exports={politics,message};