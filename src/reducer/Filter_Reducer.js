const filterReducer = (state, action) => {
  switch (action.type) {
    // Load Products and Initialize Filters
    case "LOAD_FILTER_PRODUCTS":
      if (!Array.isArray(action.payload)) {
        console.error("Invalid products payload:", action.payload);
        return state;
      }

      const prices = action.payload.map((product) => product.price || 0);
      const maxPrice = Math.max(...prices);
      const minPrice = Math.min(...prices);

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

    // Update Filters
    case "UPDATE_FILTERS_VALUE":
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value || "",
        },
      };

    // Clear Filters
    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          price: state.filters.maxPrice,
        },
      };

    // Apply Filters
    case "FILTER_PRODUCTS":
      let { all_products, filters } = state;
      let tempProducts = [...all_products];

      // Filter by Search Text
      if (filters.text) {
        tempProducts = tempProducts.filter((product) =>
          product.name?.toLowerCase().includes(filters.text.toLowerCase())
        );
      }

      // Filter by Category
      if (filters.category !== "all") {
        tempProducts = tempProducts.filter(
          (product) => product.category === filters.category
        );
      }

      // Filter by Company
      if (filters.company !== "all") {
        tempProducts = tempProducts.filter(
          (product) => product.company === filters.company
        );
      }

      // Filter by Color
      if (filters.color && filters.color !== "all") {
        tempProducts = tempProducts.filter((product) =>
          product.colors?.includes(filters.color)
        );
      }

      // Filter by Price
      tempProducts = tempProducts.filter(
        (product) => product.price <= filters.price
      );

      return { ...state, filter_products: tempProducts };

    // Set Sorting Preference
    case "SET_SORTING":
      return {
        ...state,
        sorting_value: action.payload,
      };

    // Apply Sorting
    case "SORTING_PRODUCTS":
      let sortedProducts = [...state.filter_products];
      const { sorting_value } = state;

      switch (sorting_value) {
        case "lowest":
          sortedProducts.sort((a, b) => (a.price || 0) - (b.price || 0));
          break;
        case "highest":
          sortedProducts.sort((a, b) => (b.price || 0) - (a.price || 0));
          break;
        case "a-z":
          sortedProducts.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
          break;
        case "z-a":
          sortedProducts.sort((a, b) => (b.name || "").localeCompare(a.name || ""));
          break;
        default:
          break;
      }

      return { ...state, filter_products: sortedProducts };

    // Set Grid View
    case "SET_GRID_VIEW":
      return { ...state, grid_view: true };

    // Set List View
    case "SET_LIST_VIEW":
      return { ...state, grid_view: false };

    // Default
    default:
      console.error("Unhandled action type:", action.type);
      return state;
  }
};

export default filterReducer;
