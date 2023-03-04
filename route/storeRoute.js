var express = require('express');
var storeControler = require('../controller/storeController');
const router = express.Router()

router.get("/store", storeControler.getstore)
module.exports = router;