import { createContext, useEffect, useReducer } from "react";

import { dummyProducts } from "../../pages/Products/duumyProducts.js";

const INITIAL_STATE = {
  products: dummyProducts,
  loading: false,
  error: null,
};

export const ProductContext = createContext(INITIAL_STATE);

const ProductReducer = (state, action) => {
  switch (action.type) {
    case "fetchProducts":
      return {
        ...state,
        products: action.payload,
      };
    case "addNewProduct":
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id == 0) {
            return { ...item, id: action.payload.id };
          } else {
            return item;
          }
        }),
      };
    case "addProducrForm":
      let newProducts;
      if (state.products[0].id == 0) {
        newProducts = state.products.map((product) => {
          if (product.id == 0) {
            return {
              ...action.payload,
            };
          } else {
            return product;
          }
        });
      } else {
        newProducts = [{ ...action.payload }, ...state.products];
      }
      return {
        ...state,
        products: newProducts,
      };
    case "updateMainImages":
      return {
        ...state,
        products: [
          ...state.products.map((product) => {
            if (!product.form && product.id == action.payload.id) {
              return {
                ...product,
                photos: action.payload.files,
                updated: true,
              };
            } else if (product.form && product.id == action.payload.id) {
              return {
                ...product,
                photos: action.payload.files,
                updated: true,
              };
            } else {
              return product;
            }
          }),
        ],
      };
    case "updateProductOptions":
      return {
        ...state,
        products: [
          ...state.products.map((product) => {
            if (product.id == action.payload.id) {
              return {
                ...product,
                product_colors: action.payload.colors,
              };
            } else {
              return product;
            }
          }),
        ],
      };
    case "updateProduct":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id == action.payload.id) {
            return {
              ...product,
              [action.payload.name]:
                action.payload.lang == true
                  ? {
                      en: action.payload.value,
                      ar: action.payload.value,
                    }
                  : action.payload.value,
            };
          } else {
            return product;
          }
        }),
      };
    default:
      return state;
  }
};

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, INITIAL_STATE);

  useEffect(() => {}, [state]);

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
