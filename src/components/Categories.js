import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { setStatus } from '../redux/categories/categoriesSlice';

function Categories() {
  const report = useSelector(setStatus);
  const handleClick = () => `Status: ${report}`;

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Whats the Status
      </button>
    </div>
  );
}

export default Categories;
