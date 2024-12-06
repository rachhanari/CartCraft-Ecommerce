const filterReducer = (state, action) => {
    switch (action.type) {
      case 'LOAD_FILTER_PRODUCTS':
        return {
          ...state,
          filter_products: [...action.payload],
          all_products: [...action.payload],
        };
  
      case 'SET_GRID_VIEW':
        return {
          ...state,
          grid_view: true,
        };
  
      case 'SET_LIST_VIEW':
        return {
          ...state,
          grid_view: false,
        };
  
      case 'GET_SORT_VALUE':
        return {
          ...state,
          sorting_value: action.payload,
        };
  
      case 'SORTING_PRODUCTS':
        let sortedProducts = [...state.filter_products];
        if (state.sorting_value === 'a-z') {
          sortedProducts = sortedProducts.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
        } else if (state.sorting_value === 'z-a') {
          sortedProducts = sortedProducts.sort((a, b) =>
            b.name.localeCompare(a.name)
          );
        } else if (state.sorting_value === 'lowest') {
          sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
        } else if (state.sorting_value === 'highest') {
          sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
        }
        return {
          ...state,
          filter_products: sortedProducts,
        };
  
      case 'UPDATE_FILTERS_VALUE':
        const { name, value } = action.payload;
        return {
          ...state,
          filters: {
            ...state.filters,
            [name]: value,
          },
        };
  
      case 'FILTER_PRODUCTS':
        let { all_products } = state;
        let filteredProducts = [...all_products];
  
        const { text } = state.filters;
        if (text) {
          filteredProducts = filteredProducts.filter((product) =>
            product.name.toLowerCase().includes(text.toLowerCase())
          );
        }
  
        return {
          ...state,
          filter_products: filteredProducts,
        };
  
      default:
        return state;
    }
  };
  
  export default filterReducer;
  