const router = require('express').Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const fitness = require('../Controllers/fitness').fitness;

router.get('/',fitness);
module.exports=exports = router;