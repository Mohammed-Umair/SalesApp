export const ProductsReducer = (state = { products: [] }, action) => {  // 1st step
  if (action.type === "ADD_PRODUCTS") {   //2nd state
    // console.log
    return {
      ...state,
      products: [...action.data],
    };
  }
  return state;
};                                                                    