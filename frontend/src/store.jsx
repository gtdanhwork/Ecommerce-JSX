import React, { createContext, useReducer } from "react";
import { itemsReducer } from "./containers/Reducer/reducer";

export const Store = createContext();

const initialState = { cart: { cartItems: [] } };

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(itemsReducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
