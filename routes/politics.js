const router = require('express').Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const politics = require('../Controllers/politics').politics;
const message = require('../Controllers/politics').message;

router.get('/',politics);
router.get('/message',message);

module.exports=exports = router;
