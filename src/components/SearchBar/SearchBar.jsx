import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFilters } from '../../context/filter-context';
import './SearchBar.css';

const SearchBar = () => {
  const { filterBySearch } = useFilters();
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (location.pathname !== 'browse') navigate('browse');
    filterBySearch(e.target.value);
  };
  return (
    <div className='input-group'>
      🔍
      <input
        type='text'
        placeholder='Search titles'
        className='input-field'
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
