import React, { useReducer } from "react";
import reducer from "./reducer";
import { DispatchContext, StateContext } from "./context";
const initialState = { shoppingCart: [] };

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default Store;
