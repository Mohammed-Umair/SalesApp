import { createStore, combineReducers } from "redux"; //2nd step
import { ProductsReducer } from "../Reducer/ProductsReducer";

export const configStore = () => {
  //1st step
  const myStore = createStore(
    // 3rd step
    combineReducers({ ProductsReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return myStore;
};

// import { creteStore, combineReducers } from "redux";
// import { cartReducer } from "./";
// export const Saman = () => {
//   const myStore = creteStore(
//     combineReducers(cartReducer),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
//   return myStore;
// };

// import { createStore, combineReducers } from "redux";
// import { ProductsReducer } from "../Reducer/ProductsReducer";
// export const configStore = () => {
//   const myStore = createStore(
//     combineReducers(ProductsReducer),

//     window.__REDUX__DEVTOOLS_EXTENSION__ &&
//       window.__REDUX__DEVTOOLS_EXTENSION__()
//   );
//   return myStore;
// };
