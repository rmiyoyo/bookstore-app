import React from 'react';

function Categories() {
  const handleClick = () => 'Coming soon';

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Whats the Status
      </button>
    </div>
  );
}

export default Categories;
