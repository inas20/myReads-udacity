import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { search } from '../BooksAPI';
import Book from '../Components/Book';
import PropTypes from 'prop-types'

const SearchPage = ({ books, onChangeShelf }) => {
    const [matchedBooks, setMatchedBooks] = useState([]);
    const [searchedText, setText] = useState('')

    const updateQuery = (query) => {
       
        let trimmedText = query?.replace(/^\s+/, '')
        setText(trimmedText)
       
        fetchMatchedBooks(query)
    }


    const fetchMatchedBooks = (query) => {
        /*
        * In order to fetch matched books there has to be a query.
        * This is the case covered with the "if" part.
        * If there is no query i.e. nothing entered in the Search field,
        * the matchedBooks array remains empty.
        */
        if (query.length !== 0) {
            search(query).then((matchedBooks) => {
                /*
                * The nested "if" covers the case of an error.
                * For example, if I type something that returns no result,
                * the resulting object will still have to be an array
                * otherwise the app will crash when the .map() method
                * will be run. 
                */
                if (matchedBooks.error) {
                    setMatchedBooks([])
                } else {
                    setMatchedBooks(matchedBooks)
                    // console.log(matchedBooks);
                }
            }
            )
        } else {
            setMatchedBooks([])
        }
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link  to="/"  className="close-search" >Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={searchedText}
                        onChange={(e) => updateQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="search-books-results">
                <ol className="books-grid">
                 
                    {
                        matchedBooks.map(matchedBook => {
                            
                            let shelf = "none"
                           
                            books.forEach(book => {
                                if (book.id !== matchedBook.id) {
                                    matchedBook.shelf = "none"
                                } else {
                                    shelf = book.shelf
                                }
                            })

                            return (
                                <li key={matchedBook.id}>
                                    <Book
                                        book={matchedBook}
                                        onChangeShelf={onChangeShelf}
                                        currentShelf={shelf}
                                    />
                                </li>

                            )
                        }
                        )
                    }
                </ol>
            </div>
        </div>
    )
}

SearchPage.propTypes = {
    books: PropTypes.array,
    onChangeShelf: PropTypes.func,
}

export default SearchPage;