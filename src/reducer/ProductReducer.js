const ProductReducer = (state, action) => {
    switch (action.type) {
      case "SET_LOADING":
        return { ...state, isLoading: true };
  
        case "SET_MY_API_DATA":
            const featureProducts = action.payload.filter(
              (product) => product.featured === true
            );
            return {
              ...state,
              isLoading: false,
              products: action.payload,
              featureProducts,
            };
          
  
      case "API_ERROR":
        return { ...state, isLoading: false, isError: true };

        case "SET_SINGLE_LOADING":
          case "SET_LOADING":
            return { ...state, isLoading: true };

        case "SET_SINGLE_PRODUCT":
        return { ...state, isLoading: false, singleProduct: action.payload, };

        case "SET_SINGLE_ERROR":
          return { ...state, isSingleLoading: false, isError: true };
  
      default:
        return state;
    }
  };
  
  export default ProductReducer;
  