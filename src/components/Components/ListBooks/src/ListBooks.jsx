import { useState } from "react";
import BookForm from "./components/BookForm";
import BookCard from "./components/BookCard";
import "./App.css";

function ListBooks() {
  const [books, setBooks] = useState([]);

  const addBook = book => {
    setBooks([...books, book]);
  };

  return (
    <>
      <h1 className="form-title">Отслеживание прочитанных книг</h1>
      <div className="container">
        <div className="form-wrapper">
          <BookForm addBook={addBook} />
        </div>
      </div>
      <div className="books-container">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </>
  );
}

export default ListBooks;
