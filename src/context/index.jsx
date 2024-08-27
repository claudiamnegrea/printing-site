import { createContext } from "react";
import { useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [pending, setPending] = useState(false);

  return (
    <GlobalContext.Provider value={{ pending, setPending }}>
      {children}
    </GlobalContext.Provider>
  );
}
