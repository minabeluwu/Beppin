const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_SHOPPINGCART":
      const idx = state.shoppingCart.findIndex(
        (prod) => prod.id === action.payload.id
      );

      const newShoppingCart = [...state.shoppingCart];
      if (idx > -1) {
        newShoppingCart[idx] = {
          ...newShoppingCart[idx],
          quantity: newShoppingCart[idx]++,
        };
      } else {
        newShoppingCart.push({ ...action.payload, quantity: 1 });
      }

      return {
        ...state,
        shoppingCart: newShoppingCart,
      };

    case "DELETE_PRODUCT":
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(
          (product) => product.id !== action.payload
        ),
      };

    case "OPEN_MODAL":
      return {
        ...state,
        modalIsOpen: true,
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        modalIsOpen: false,
      };

    default:
      break;
  }
};

export default reducer;
