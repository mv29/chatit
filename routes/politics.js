const router = require('express').Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const politics = require('../Controllers/politics').politics;

router.get('/',politics);
module.exports=exports = router;