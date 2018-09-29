const router = require('express').Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const love = require('../Controllers/love').love;
const message = require('../Controllers/love').message;

router.get('/',love);
router.get('/message',message);

module.exports=exports = router;
