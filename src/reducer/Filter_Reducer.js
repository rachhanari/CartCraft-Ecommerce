const filterReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_FILTER_PRODUCTS':
      let priceArr = action.payload
        .map((product) => product.price)
        .filter((price) => typeof price === 'number' && !isNaN(price));

      let maxPrice = priceArr.length > 0 ? Math.max(...priceArr) : 0;
      let minPrice = priceArr.length > 0 ? Math.min(...priceArr) : 0;

      return {
        ...state,
        all_products: [...action.payload],
        filter_products: [...action.payload],
        filters: {
          ...state.filters,
          price: maxPrice,
          maxPrice,
          minPrice,
        },
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

      if (filters.category !== 'all') {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === filters.category
        );
      }

      if (filters.company !== 'all') {
        filteredProducts = filteredProducts.filter(
          (product) => product.company === filters.company
        );
      }

      if (filters.color !== 'all') {
        filteredProducts = filteredProducts.filter((product) =>
          product.colors.includes(filters.color)
        );
      }

      filteredProducts = filteredProducts.filter(
        (product) => product.price >= filters.minPrice && product.price <= filters.price
      );

      return { ...state, filter_products: filteredProducts };

    case 'UPDATE_FILTERS_VALUE':
      const { name, value } = action.payload;
      return {
        ...state,
        filters: { ...state.filters, [name]: value },
      };

    case 'CLEAR_FILTERS':
      return {
        ...state,
        filters: {
          text: '',
          category: 'all',
          company: 'all',
          color: 'all',
          maxPrice: state.filters.maxPrice,
          price: state.filters.maxPrice,
          minPrice: state.filters.minPrice,
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
