import { createContext } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [pending, setPending] = useState(false);
  const [productData, setProductData] = useState(null);
  const { cart } = useSelector((state) => state);
  

  return (
    <GlobalContext.Provider
      value={{ pending, setPending, productData, setProductData ,cart}}
    >
      {children}
    </GlobalContext.Provider>
  );
}
