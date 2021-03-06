import PRODUCTS from "../../data/dummy-data";
import {
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  SET_PRODUCT,
} from "../action/actionProduct";
import Product from "../../models/product";

const initialState = {
  availableProduct: [],
  userProduct: [],
};

const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return {
        ...state,
        userProduct: state.userProduct.filter(
          (product) => product.id !== action.pid
        ),
        availableProduct: state.availableProduct.filter(
          (product) => product.id !== action.pid
        ),
      };

    case CREATE_PRODUCT: {
      const newProduct = new Product(
        action.productData.id,
        action.productData.ownerId,
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        action.productData.price
      );

      return {
        ...state,
        availableProduct: state.availableProduct.concat(newProduct),
        userProduct: state.availableProduct.concat(newProduct),
      };
    }
    case UPDATE_PRODUCT:
      const productIndex = state.userProduct.findIndex(
        (prod) => prod.id === action.pid
      );
      const updateProduct = new Product(
        action.pid,
        state.userProduct[productIndex].ownerId,
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        state.userProduct[productIndex].price
      );

      const updateUserProduct = [...state.userProduct];
      updateUserProduct[productIndex] = updateProduct;
      const updateProductIndex = state.availableProduct.findIndex(
        (prod) => prod.id === action.pid
      );
      const updateAvailabelProduct = [...state.availableProduct];
      updateAvailabelProduct[updateProductIndex] = updateProduct;

      return {
        ...state,
        availableProduct: updateAvailabelProduct,
        userProduct: updateUserProduct,
      };

      case SET_PRODUCT : 
      return  {
        ...state,
        availableProduct: action.products,
        userProduct: action. userProducts,
      }

  }
  return state;
};

export default productReducers;
