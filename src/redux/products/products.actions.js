import { productActionType } from "./products.types";

export const setProducts = products => {
  return {
    type: productActionType.SET_PRODUCTS,
    payload: products
  };
};
