import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducer/Filter_Reducer';
import { useProductContext } from './Productcontext';

const FilterContext = createContext();

const initialState = {
  filter_product: [],
  all_products: [],
  grid_view: false,
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

  useEffect(() => {
    dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
