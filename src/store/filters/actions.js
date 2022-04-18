import {
  FILTER_BY_CATEGORY,
  FILTER_BY_SORT,
  CLEAR_FILTERS,
  FILTER_BY_SEARCH,
} from './action.types';

export const filterByCategory = (filters, dispatch) => (filter) => {
  dispatch({ type: FILTER_BY_CATEGORY, payload: filter });
};

export const filterBySort = (filters, dispatch) => (filter) => {
  if (
    filter?.type === 'ASCENDING' ||
    ('DESCENDING' && filter?.by === 'PRICE') ||
    'ALPHABET' ||
    'RELEASE'
  ) {
    let newSort = filters.sort;
    if (newSort?.type === filter.type) {
      newSort = { name: 'Relevance', type: '', by: '' };
    } else {
      newSort = { name: filter.name, type: filter.type, by: filter.by };
    }
    dispatch({
      type: FILTER_BY_SORT,
      payload: newSort,
    });
  }
};

export const filterBySearch = (filters, dispatch) => (search) => {
  const newSearchName = search.trim('');
  dispatch({ type: FILTER_BY_SEARCH, payload: { searchName: newSearchName } });
};

export const clearFilters = (dispatch) => () => {
  dispatch({
    type: CLEAR_FILTERS,
  });
};
