import React, { createContext, useContext, useReducer } from "react";

//preparing a datalayer
export const StateContext = createContext();

//

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStatevalue = () => useContext(StateContext);
