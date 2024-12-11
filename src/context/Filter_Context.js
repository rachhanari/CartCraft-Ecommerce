import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/Filter_Reducer";
import { useProductContext } from "./Productcontext";
import { useSearchParams } from "react-router-dom";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
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
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    dispatch({ type: "SET_FILTERS_FROM_PARAMS", payload: params });
  }, [searchParams]);

  useEffect(() => {
    if (products && Array.isArray(products)) {
      dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }
  }, [products]);

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value, state.filters]);

  const updateFilterValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setSearchParams((prev) => {
      const updatedParams = new URLSearchParams(prev);
      updatedParams.set(name, value);
      return updatedParams;
    });

    dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  const sorting = (event) => {
    const value = event.target.value;
    dispatch({ type: "SET_SORTING", payload: value });
  };

  const clearFilter = () => {
    setSearchParams({});
    dispatch({ type: "CLEAR_FILTERS" });
  };

  const setGridView = () => dispatch({ type: "SET_GRID_VIEW" });
  const setListView = () => dispatch({ type: "SET_LIST_VIEW" });

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateFilterValue,
        clearFilter,
        sorting,
        setGridView,
        setListView,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);