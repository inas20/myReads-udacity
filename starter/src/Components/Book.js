import React from 'react';
import PropTypes from 'prop-types'

const Book = ({book, onChangeShelf, currentShelf})=>{
    const {title,authors,imageLinks} = book;
    const shelves = [
        {
            id: "1",
            value: "currentlyReading",
            label: "Currently Reading"
        },
        { id: "2", value: "wantToRead", label: "Want To Read" },
        { id: "3", value: "read", label: "Read" }
    ]
    let hasCoverImage;
    if (imageLinks) {
        hasCoverImage = imageLinks?.thumbnail
    } else {
        hasCoverImage = ''
    }

    return(
        <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, 
                        height: 193, backgroundImage: `url("${hasCoverImage}")` }}></div>
                        <div className="book-shelf-changer">
                            <select
                                onChange={(e) => onChangeShelf(book, e.target.value)}
                                value={currentShelf}
                            >
                                 <option value="move" disabled>Move to...</option>
                                {shelves.map(shelf=>(
                                <option key= {shelf.value} value={shelf?.value}>{shelf.label}</option>
                                ))}
                                
                            </select>
                        </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>
    )
}

Book.propTypes = {
    book: PropTypes.shape({
        title : PropTypes.string,
        authors :PropTypes.array,
        imageLinks : PropTypes.object
        
      }),
    onChangeShelf : PropTypes.func,
    currentShelf: PropTypes.string
  }

export default Book;