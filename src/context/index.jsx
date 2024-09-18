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
  const [totalCart, setTotalCart] = useState(0);
  const [shippingFee, setShippingFee] = useState(10);

  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cart) {
      try {
        totalCount += 1;
      } catch (e) {
        console.log(e);
      }
    }
    return totalCount;
  };

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
        getCartCount,
        totalCart,
        setTotalCart,
        shippingFee,
        setShippingFee,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
