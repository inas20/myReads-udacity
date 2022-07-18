import React from "react";
import Book from "./Book";
import PropTypes from 'prop-types'

const BookShelf = ({ books, onChangeShelf }) => {

    const shelves = [
        {
            id: "1",
            value: "currentlyReading",
            label: "Currently Reading"
        },
        { id: "2", value: "wantToRead", label: "Want To Read" },
        { id: "3", value: "read", label: "Read" }
    ]

    return (
        <div>
            {shelves.map(shelf => (
                <div className="bookshelf" key={shelf.id}>

                    <h2 className="bookshelf-title">{shelf?.label}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {
                                books?.filter(book => book.shelf === shelf.value)
                                    .map(book => (
                                        <li key={book.id} >
                                            <Book
                                                book={book}
                                                onChangeShelf={onChangeShelf}
                                                currentShelf={shelf.value}
                                            />
                                        </li>
                                    ))
                            }
                        </ol>
                    </div>
                </div>
            ))}
        </div>


    )
}

BookShelf.propTypes = {
    books: PropTypes.array,
    onChangeShelf: PropTypes.func,
}

export default BookShelf