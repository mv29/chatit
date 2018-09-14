const user = require('../models/model1');

//Simple version, without validation or sanitation

const signup1 = function (req, res) {
    res.render('signup');
};


const signup2 = function (req, res) {
    if (!req.body.email)
    {
        throw "No Email Provided"
    }
    else
    {
        console.log("fuck signup");
        console.log(req.body.email+" " +req.body.password);
        user.create(
            { email: req.body.email ,
                password : req.body.password },
            function (err, user) {
            if (err)
            {
                console.log(err,"form signup controller");
                return err;
            }
            else
            {
                console.log(user);
                res.redirect('/login');
            }
        });
    }
};

exports=module.exports={signup1,signup2};