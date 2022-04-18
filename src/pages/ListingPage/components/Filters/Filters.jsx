import React, { useEffect } from 'react';
import { useFilters } from '../../../../context/filter-context';
import { filterList } from '../../../../utils/filters';
import './Filters.css';

const Filters = ({ list, setList }) => {
  const { filters } = useFilters();

  useEffect(() => {
    if (filters?.appliedFilters > 0 && list?.length > 0) {
      setList(filterList(list, filters));
    }
    if (filters.appliedFilters === 0) {
      setList([...list]);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [list, filters, setList]);

  return (
    <>
      <span>
        Sort by: <SortByDropdown />
      </span>
      <span>
        Filter by category: <FilterByDropdown />
      </span>
    </>
  );
};

const sortingData = [
  { name: 'Relevance', type: '', by: '' },
  { name: 'Latest Release', type: 'ASCENDING', by: 'RELEASE' },
  {
    name: 'Most Viewed',
    type: 'DESCENDING',
    by: 'VIEWS',
  },
  {
    name: 'Most Liked',
    type: 'DESCENDING',
    by: 'LIKES',
  },
];

const SortByDropdown = () => {
  const {
    filters: { sort },
    filterBySort,
  } = useFilters();

  return (
    <span className='dropdown text-light'>
      <span className='dropdown-title'>
        <select
          value={JSON.stringify(sort)}
          onChange={(e) => filterBySort(JSON.parse(e.target.value))}
          className='select-dropdown'>
          {sortingData.map((item, index) => (
            <option
              key={index}
              value={JSON.stringify(item)}
              className='list-item'>
              {item.name}
            </option>
          ))}
        </select>
      </span>
    </span>
  );
};

const FilterByDropdown = () => {
  const {
    filters: { categoryName },
    filterByCategory,
  } = useFilters();

  return (
    <span className='dropdown text-light'>
      <span className='dropdown-title'>
        <select
          value={categoryName}
          onChange={(e) => filterByCategory(e.target.value)}
          className='select-dropdown'>
          <option value='' className='list-item'>
            All
          </option>
          <option value='Romance' className='list-item'>
            Romance
          </option>
          <option value='Action' className='list-item'>
            Action
          </option>
          <option value='Sci-fi' className='list-item'>
            Sci-fi
          </option>
          <option value='Fiction' className='list-item'>
            Fiction
          </option>
          <option value='Drama' className='list-item'>
            Drama
          </option>
        </select>
      </span>
    </span>
  );
};

export default Filters;
