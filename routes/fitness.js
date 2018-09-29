const router = require('express').Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const fitness = require('../Controllers/fitness').fitness;
const message = require('../Controllers/fitness').message;

router.get('/',fitness);
router.get('/message',message);

module.exports=exports = router;
