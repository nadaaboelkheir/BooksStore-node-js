exports.Note = class Note {
    constructor(book_id, book_title, book_description, publisher, author, isbn, pages, store_code) {
        this.book_id = book_id
        this.book_title = book_title
        this.book_description = book_description
        this.publisher = publisher
        this.author = author
        this.isbn = isbn
        this.pages = pages
        this.store_code = store_code

    }

}