import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducer/Filter_Reducer';
import { useProductContext } from './Productcontext';

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: 'lowest',
  filters: {
    text: '',
    category: "all",
    company: "all",
    color: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    dispatch({ type: 'SET_GRID_VIEW' });
  };

  const setListView = () => {
    dispatch({ type: 'SET_LIST_VIEW' });
  };

  const sorting = (event) => {
    const value = event.target.value;
    dispatch({ type: 'GET_SORT_VALUE', payload: value });
  };

  const updateFilterValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    dispatch({ type: 'UPDATE_FILTERS_VALUE', payload: { name, value } });
  };

  const clearFilter = () => {
    dispatch({ type: "CLEAR_FILTERS" });  // Make sure this dispatches the correct action
  };

  useEffect(() => {
    dispatch({ type: 'FILTER_PRODUCTS' });
    dispatch({ type: 'SORTING_PRODUCTS' });
  }, [state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        clearFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
