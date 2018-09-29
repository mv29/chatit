const router = require('express').Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const technology = require('../Controllers/technology').technology;
const message = require('../Controllers/technology').message;

router.get('/',technology);
router.get('/message',message);

module.exports=exports = router;
