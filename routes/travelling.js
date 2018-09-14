const router = require('express').Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const travelling = require('../Controllers/travelling').travelling;

router.get('/',travelling);
module.exports=exports = router;