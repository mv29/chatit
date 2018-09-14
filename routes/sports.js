const router = require('express').Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const sports = require('../Controllers/sports').sports;

router.get('/',sports);
module.exports=exports = router;