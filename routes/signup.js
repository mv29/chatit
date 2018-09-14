const router = require('express').Router();
const signup1 = require('../Controllers/signup').signup1;
const signup2 = require('../Controllers/signup').signup2;

router.get('/',signup1);

router.post('/',signup2);

module.exports=exports = router;
