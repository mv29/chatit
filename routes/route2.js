const router = require('express').Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const controller2 = require('../controllers/controller2');
//console.log(controller1);
// a simple test url to check that all of our files are communicating correctly.
router.post('/create',controller2);
module.exports=exports = router;