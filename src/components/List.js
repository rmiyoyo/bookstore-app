import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Form from './Form';
import { getData } from '../redux/books/booksSlice';
import Show from './Show';
import Book from './Book';

const List = () => {
  const books = useSelector((store) => store.book.books);
  const statusFetch = useSelector((store) => store.book.statusFetch);
  const varUser = useDispatch();

  useEffect(() => {
    varUser(getData());
  }, [varUser]);

  if (statusFetch === 'loading') {
    return <div className="loading"><Show /></div>;
  } if (statusFetch === 'succeeded') {
    return (
      <div>
        <div className="item-list">
          {books.map((book) => (
            <Book key={books.itemId || books.item_id || uuidv4()} book={book} />
          ))}
        </div>
        <div>
          <Form />
        </div>
      </div>
    );
  }
  return <div>Could Not Get Books</div>;
};

export default List;
