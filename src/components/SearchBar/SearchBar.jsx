import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className='input-group'>
      🔍
      <input type='text' placeholder='Search titles' className='input-field' />
    </div>
  );
};

export default SearchBar;
