const user = require('../models/model1');

//Simple version, without validation or sanitation
const fitness1=[];
const fitness = function (req, res) {
    console.log(fitness1);
    res.render('fitness',{message:fitness1});
};
const message = function (req, res) { // storing the 50 previous messages
    //console.log(req.query.x);
    if (fitness1.length>50)
    {
        fitness1.shift();
    }
    fitness1.push({mess:req.query.x,user:req.query.y});

};

exports=module.exports={fitness,message};