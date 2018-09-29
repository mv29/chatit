const router = require('express').Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const peace = require('../Controllers/peace').peace;
const message = require('../Controllers/peace').message;

router.get('/',peace);
router.get('/message',message);

module.exports=exports = router;
