var express = require('express');
var bookControler = require('../controller/bookController');
const router = express.Router()

router.get("/books" ,bookControler.getbook )
module.exports = router;