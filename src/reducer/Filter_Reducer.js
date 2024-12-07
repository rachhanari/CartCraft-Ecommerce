const filterReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_FILTER_PRODUCTS':
      return {
        ...state,
        all_products: [...action.payload],
        filter_products: [...action.payload],
      };

    case 'SET_GRID_VIEW':
      return { ...state, grid_view: true };

    case 'SET_LIST_VIEW':
      return { ...state, grid_view: false };

    case 'GET_SORT_VALUE':
      return { ...state, sorting_value: action.payload };

    case 'SORTING_PRODUCTS':
      const { sorting_value, filter_products } = state;
      let sortedProducts = [...filter_products];

      if (sorting_value === 'lowest') {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sorting_value === 'highest') {
        sortedProducts.sort((a, b) => b.price - a.price);
      } else if (sorting_value === 'a-z') {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sorting_value === 'z-a') {
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      }

      return { ...state, filter_products: sortedProducts };

    case 'FILTER_PRODUCTS':
      const { all_products, filters } = state;
      let filteredProducts = [...all_products];

      if (filters.text) {
        filteredProducts = filteredProducts.filter((product) =>
          product.name.toLowerCase().includes(filters.text.toLowerCase())
        );
      }

      if (filters.category !== "all") {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === filters.category
        );
      }

      if (filters.company !== "all") {
        filteredProducts = filteredProducts.filter(
          (product) => product.company === filters.company
        );
      }

      if (filters.color !== "all") {
        filteredProducts = filteredProducts.filter(
          (product) => product.colors.includes(filters.color)
        );
      }

      return { ...state, filter_products: filteredProducts };

    case 'UPDATE_FILTERS_VALUE':
      const { name, value } = action.payload;
      return {
        ...state,
        filters: { ...state.filters, [name]: value },
      };

    default:
      return state;
  }
};

export default filterReducer;
