const router = require('express').Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const entertairment = require('../Controllers/entertairment').entertairment;

router.get('/',entertairment);
module.exports=exports = router;