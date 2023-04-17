import { Children, createContext, useEffect, useState } from "react";
import { fakeFetch } from "../Api/fakeFetch";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);
  function addCartItem(item) {
    setCartItem([...cartItem, item]);
  }
  function removeCartItem(idtoRemove) {
    setCartItem(cartItem.filter(({ id }) => id !== idtoRemove));
  }
  return (
    <div>
      <DataContext.Provider value={{ cartItem, addCartItem, removeCartItem }}>
        {children}
      </DataContext.Provider>
    </div>
  );
}
