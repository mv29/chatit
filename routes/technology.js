const router = require('express').Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const technology = require('../Controllers/technology').technology;

router.get('/',technology);
module.exports=exports = router;