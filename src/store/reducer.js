const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_SHOPPINGCART":
      console.log("ADD_ITEM_TO_SHOPPINGCART");
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload],
      };

    default:
      break;
  }
};

export default reducer;
