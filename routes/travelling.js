const router = require('express').Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const travelling = require('../Controllers/travelling').travelling;
const message = require('../Controllers/travelling').message;

router.get('/',travelling);
router.get('/message',message);

module.exports=exports = router;
