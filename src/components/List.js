import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Add from './Add';
import Book from './Book';

const Books = () => {
  const book = [
    {
      id: uuidv4(),
      title: 'Elon Must',
      author: 'Walter Isaacson',
    },
    {
      id: uuidv4(),
      title: 'Hunger Games',
      author: 'George RR Martin',
    },
    {
      id: uuidv4(),
      title: 'My Life',
      author: 'Collin Powell',
    },
  ];

  return (
    <div className="book-container">
      <Book book={book} />
      <Add />
    </div>
  );
};

export default Books;
