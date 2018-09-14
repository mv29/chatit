const router = require('express').Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const education = require('../Controllers/education').education;
const message = require('../Controllers/education').message;

router.get('/',education);
router.get('/message',message);

module.exports=exports = router;
