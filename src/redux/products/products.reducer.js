import { productActionType } from "./products.types";

const INIT_STATE = {
  milk: null
};

const productsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case productActionType.SET_PRODUCTS:
      return { ...action.payload };
    case "INCREASE_STOCK":
      return {
        ...state,
        stock: state.stock + 1
      };
    default:
      return state;
  }
};
export default productsReducer;
