import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { itemAsync } from '../redux/books/booksSlice';
import './List.css';

const Form = () => {
  const dispatch = useDispatch();
  const [title, enterTitle] = useState('');
  const [author, enterAuthor] = useState('');
  const [category, enterCategory] = useState('');

  const functionTitle = (e) => {
    enterTitle(e.target.value);
  };

  const functionAuthor = (e) => {
    enterAuthor(e.target.value);
  };

  const functionCategory = (e) => {
    enterCategory(e.target.value);
  };

  const functionSubmit = async (e) => {
    e.preventDefault();

    if (category) {
      const newBook = {
        item_id: uuidv4(),
        title,
        author,
        category,
      };

      dispatch(itemAsync(newBook));

      enterTitle('');
      enterAuthor('');
      enterCategory('');
    }
  };

  const accurateForm = !!category;

  return (
    <div className="item-input">
      <hr />
      <h2>Add A Book</h2>
      <form onSubmit={functionSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={functionTitle}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={functionAuthor}
        />
        <select
          className="items-option"
          value={category}
          onChange={functionCategory}
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
        <button type="submit" disabled={!accurateForm}>Add Book</button>
      </form>
    </div>
  );
};

export default Form;
