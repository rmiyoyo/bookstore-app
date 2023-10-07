import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bookRemoved } from '../redux/books/booksSlice';

const Book = () => {
  const bookList = useSelector((state) => state.books.books);
  const reduxDispatch = useDispatch();

  const removeBooks = (bookId) => {
    reduxDispatch(bookRemoved(bookId));
  };

  return (
    <div className="book-section">
      {bookList.map((book) => (
        <div key={book.item_id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <span>
            <button type="button">Comment</button>
            <button type="button" onClick={() => removeBooks(book.item_id)}>Remove</button>
            <button type="button">Edit</button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Book;
