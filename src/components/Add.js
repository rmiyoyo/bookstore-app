import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { bookAdded } from '../redux/books/booksSlice';

const uniqueKey = 'K3hT3NWmvS6GWRCzhZYc';

const Add = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };

    try {
      const response = await axios.post(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${uniqueKey}/books`, newItem);

      dispatch(bookAdded(response.data));

      setTitle('');
      setAuthor('');
      setCategory('');
    } catch (error) {
      throw new Error(error);
    }
  };

  const accurateForm = !!category;

  return (
    <div className="new-book">
      <h1>Add A Book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Book Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>Category</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Science-Fiction">Science Fiction</option>
        </select>

        <button type="submit" disabled={!accurateForm}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Add;
