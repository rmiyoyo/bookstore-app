import React from 'react';

const Add = () => (
  <div className="add-new-book">
    <h1>Add A Book</h1>
    <form>
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Book Author" />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default Add;
