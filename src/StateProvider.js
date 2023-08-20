import React, { createContext, useContext, useReducer } from "react";
export const StateContext = createContext();
export const StateProvider = ({ reducer, initialState, children }) => (
  // well and good at all
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// export const useStateValue = () => useContext(StateContext);
export function useStateValue() {
  return useContext(StateContext);
}
