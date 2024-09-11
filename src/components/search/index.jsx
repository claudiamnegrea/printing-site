import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import classes from "./style.module.css";
import { useContext } from "react";
import { GlobalContext } from "../../context";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Search() {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(GlobalContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("portfolio")) {
      setVisible(true);
    } else {
      setVisible(false);
      setShowSearch(false);
    }
  }, [location]);
  return (
    <div className={classes.wrapper}>
      <HiOutlineMagnifyingGlass
        className={classes.search}
        onClick={() => {
          setShowSearch(!showSearch);
          setSearch("");
        }}
        hidden={!visible}
      />

      <input
        name="search-field"
        type="text"
        placeholder="Searching for ..."
        hidden={!showSearch}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
