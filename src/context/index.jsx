import { createContext } from "react";
import { useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [pending, setPending] = useState(false);
  const [productData, setProductData] = useState(null);

  return (
    <GlobalContext.Provider
      value={{ pending, setPending, productData, setProductData }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
