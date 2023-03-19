var express = require('express');
var book_Controller = require('../controller/bookController');
const router = express.Router()

router
 .get("/books/get_books" ,book_Controller.get_books )
 .post("/books/creat_book" ,book_Controller.creat_book )
 .put("/books/update_book" ,book_Controller.update_book )
 .delete("/books/delete_book" ,book_Controller.delete_book )
 .get("/books/book_desc/:BOOK_ID" ,book_Controller.book_desc )

module.exports = router;