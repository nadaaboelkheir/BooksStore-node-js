var express = require('express');
var storeController = require('../controller/storeController');
const router = express.Router()

router
 .get("/store/liststore", storeController.getstorelist)
 .post("/store/creatstore", storeController.creatstore)
module.exports = router;  