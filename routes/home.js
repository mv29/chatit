const router = require('express').Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const home1 = require('../Controllers/home').home1;
const home2 = require('../Controllers/home').home2;

router.get('/',home1);
router.get('/username',home2);
module.exports=exports = router;