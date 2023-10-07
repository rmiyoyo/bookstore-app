import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeItemAsync } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const {
    itemId, title, author, category,
  } = book;

  const [completionPercentage, setCompletionPercentage] = useState(Math.floor(Math.random() * 101));
  const [currentPage, setCurrentPage] = useState(Math.floor(Math.random() * 301));

  const dispatch = useDispatch();

  const handleRemove = async () => {
    dispatch(removeItemAsync(itemId));
  };

  const handleUpdateProgress = () => {
    const newPercentage = Math.floor(Math.random() * 101);
    const newPage = Math.floor(Math.random() * 301);
    setCompletionPercentage(newPercentage);
    setCurrentPage(newPage);
  };

  return (
    <div className="book-section">
      <div className="book-main">
        <h3 className="items-category">{category}</h3>
        <h2 className="items-title">{title}</h2>
        <p className="item-author">{author}</p>
        <div className="item-actions">
          <button type="button">Comments |</button>
          <button type="button" onClick={handleRemove}>Remove |</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <section className="book-progress">
        <div className="completed">
          <h2>
            {completionPercentage}
            %
          </h2>
          <span>Completed</span>
        </div>
        <div className="vertical-line" />
        <div className="update-progress-section">
          <span>Current Page</span>
          <p>
            Page:
            {currentPage}
          </p>
          <button type="button" onClick={handleUpdateProgress}>Update Progress</button>
        </div>
      </section>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    itemId: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
