const router = require('express').Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const entertainment = require('../Controllers/entertainment').entertainment;
const message = require('../Controllers/entertainment').message;

router.get('/',entertainment);
router.get('/message',message);

module.exports=exports = router;
