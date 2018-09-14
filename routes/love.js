
const router = require('express').Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const love = require('../Controllers/love').love;

router.get('/',love);
module.exports=exports = router;