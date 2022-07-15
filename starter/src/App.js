import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import { getAll, update } from "./BooksAPI";
import SearchPage from "./Pages/SearchPage";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAll().then((books) => {
      setBooks(books)
    })
  }, [])

  const onChangeShelf = (book,shelf) => {
    update(book, shelf).then(res=>{
        getAll().then((books) => {
          setBooks(books)
        })
    })
    
  }

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={
          <HomePage
              books={books}
              onChangeShelf={onChangeShelf}
            />
            }
          />

        <Route exact path="/search" element={
          <SearchPage
            onChangeShelf={onChangeShelf}
            books={books}
          />
        } />
      </Routes>
    </div>
  );
}

export default App;
