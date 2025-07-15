import { createContext, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <ProductContext.Provider value={{ cart, setCart }}>
      {children}
    </ProductContext.Provider>
  );
}
