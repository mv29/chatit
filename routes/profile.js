const router = require('express').Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const profile = require('../Controllers/profile').profile1;
const friend = require('../Controllers/profile').friend;

//console.log(controller1);
// a simple test url to check that all of our files are communicating correctly.
router.get('/',profile);
module.exports=exports = router;