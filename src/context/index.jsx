import { createContext } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [pending, setPending] = useState(false);
  const [productData, setProductData] = useState(null);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const { cart } = useSelector((state) => state);
  const [listOfProducts, setListOfProducts] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        pending,
        setPending,
        productData,
        setProductData,
        cart,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        listOfProducts,
        setListOfProducts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
