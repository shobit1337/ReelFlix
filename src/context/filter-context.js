import { createContext, useContext, useReducer, useEffect } from 'react';
import { CLEAR_FILTERS } from '../store/filters/action.types';
import {
  filterByCategory,
  clearFilters,
  filterBySort,
  filterBySearch,
} from '../store/filters/actions';
import { filtersReducer, initialState } from '../store/filters/reducer';

const FiltersContext = createContext();

const FiltersProvider = ({ children }) => {
  const [filters, dispatchFilters] = useReducer(filtersReducer, initialState);

  useEffect(() => {
    return () => {
      dispatchFilters({ type: CLEAR_FILTERS });
    };
  }, [dispatchFilters]);

  return (
    <FiltersContext.Provider
      value={{
        filters,
        filterByCategory: filterByCategory(filters, dispatchFilters),
        filterBySort: filterBySort(filters, dispatchFilters),
        filterBySearch: filterBySearch(filters, dispatchFilters),
        clearFilters: clearFilters(dispatchFilters),
      }}>
      {children}
    </FiltersContext.Provider>
  );
};

const useFilters = () => useContext(FiltersContext);

export { FiltersProvider, useFilters };
