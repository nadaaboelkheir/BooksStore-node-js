var book_model = require("../model/bookModel")
var db_query = require('../db/queries')
var code_utility = require('../utill/utillity')
var db_connection = require('../db/connection')

exports.get_books = async (req, res) => {
    try {
        var BOOKS_listquery = db_query.queries.GET_BOOKS
        var result = await db_connection.query(BOOKS_listquery)
        return res.status(200).send(JSON.stringify(result.rows));
    }
    catch (err) {
        return res.status(500).send("faild to list stores")
    }



}
exports.creat_book = async (req, res) => {
    try {
        var BOOK_TITLE = req.body.BOOK_TITLE
        var BOOK_DESCRIPTION = req.body.BOOK_DESCRIPTION
        var BOOK_AUTHOR = req.body.BOOK_AUTHOR
        var BOOK_PUBLISHER = req.body.BOOK_PUBLISHER
        var BOOK_ISBN = req.body.BOOK_ISBN
        var BOOK_PAGES = req.body.BOOK_PAGES
        var CREATED_BY = "admin"
        var CREATED_ON = new Date()
        var STORE_CODE = req.body.STORE_CODE

        if (!BOOK_TITLE || !BOOK_DESCRIPTION || !BOOK_AUTHOR || !BOOK_PUBLISHER || !BOOK_ISBN || !BOOK_PAGES || !STORE_CODE) {
            return res.status(500).send("fill the required fields")
        }

        var values = [BOOK_TITLE, BOOK_DESCRIPTION, BOOK_AUTHOR, BOOK_PUBLISHER, BOOK_ISBN, BOOK_PAGES, STORE_CODE, CREATED_ON, CREATED_BY]
        var creat_book = db_query.queries.CREAT_BOOK
        var result = await db_connection.query(creat_book, values)
        // console.log(result)
        return res.status(201).send(JSON.stringify(result));
    }
    catch {
        return res.status(500).send("faild to creat store")
    }
}
exports.update_book = async (req, res) => {
    try {
        var BOOK_ID = req.body.BOOK_ID
        var BOOK_TITLE = req.body.BOOK_TITLE
        var BOOK_DESCRIPTION = req.body.BOOK_DESCRIPTION
        var BOOK_AUTHOR = req.body.BOOK_AUTHOR
        var BOOK_PUBLISHER = req.body.BOOK_PUBLISHER
        var BOOK_ISBN = req.body.BOOK_ISBN
        var BOOK_PAGES = req.body.BOOK_PAGES
        var CREATED_BY = "admin"
        var CREATED_ON = new Date()
        var STORE_CODE = req.body.STORE_CODE
        var book_id = db_query.queries.GET_ID_BOOK
        var GET_ID_BOOK = await db_connection.query(book_id, [BOOK_ID])

        if (!BOOK_TITLE || !BOOK_DESCRIPTION || !BOOK_AUTHOR || !BOOK_PUBLISHER || !BOOK_ISBN || !BOOK_PAGES || !STORE_CODE || !BOOK_ID) {
            return res.status(500).send("fill the required fields")
        }
        if ((GET_ID_BOOK.rows[0].count) == "0") {
            return res.status(500).send("not exist in database")
        }
        var values = [BOOK_TITLE, BOOK_DESCRIPTION, BOOK_AUTHOR, BOOK_PUBLISHER, BOOK_ISBN, BOOK_PAGES, STORE_CODE, CREATED_ON, CREATED_BY, BOOK_ID]
        var update_book = db_query.queries.UPDATE_BOOK
        var result = await db_connection.query(update_book, values)
        // console.log(result)
        return res.status(201).send(JSON.stringify(result));
    }
    catch {
        return res.status(500).send("faild to update store")
    }
}
exports.delete_book = async (req, res) => {
    try {
        var BOOK_ID = req.body.BOOK_ID
        if (!BOOK_ID) {
            return res.status(500).send("fill the required fields")
        }
        var book_id = db_query.queries.GET_ID_BOOK
        var GET_ID_BOOK = await db_connection.query(book_id, [BOOK_ID])

        if ((GET_ID_BOOK.rows[0].count) == "0") {
            return res.status(500).send("not exist in database")
        }

        var values = [BOOK_ID]
        var delete_book = db_query.queries.DELETE_BOOK
        var result = await db_connection.query(delete_book, values)
        // console.log(result)
        return res.status(201).send(JSON.stringify(result));
    }
    catch {
        return res.status(500).send("faild to delete store")
    }
}
