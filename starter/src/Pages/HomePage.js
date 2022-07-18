import React from 'react';
import { Link } from 'react-router-dom'
import BookShelf from '../Components/BookShelf';
import PropTypes from 'prop-types'

const HomePage = ({ books, onChangeShelf }) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf
                    books={books}
                    onChangeShelf={onChangeShelf}
                />
            </div>
            <div className="open-search">
                <Link  to="/search" >Add a book</Link>
            </div>

        </div>
    )
}

HomePage.propTypes = {
    books: PropTypes.array,
    onChangeShelf: PropTypes.func,
}

export default HomePage;