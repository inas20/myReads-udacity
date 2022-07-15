import React from 'react';

const Book = ({book, onChangeShelf, currentShelf})=>{
    const {title,authors,imageLinks} = book;

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
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>
    )
}

export default Book;