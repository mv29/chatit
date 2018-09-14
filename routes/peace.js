const router = require('express').Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const peace = require('../Controllers/peace').peace;

router.get('/',peace);
module.exports=exports = router;