const router = require('express').Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const sports = require('../Controllers/sports').sports;
const message = require('../Controllers/sports').message;

router.get('/',sports);
router.get('/message',message);

module.exports=exports = router;
