import { Link } from "react-router-dom";
import classes from "./style.module.css";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { BsCart2 } from "react-icons/bs";

export default function Header() {
  return (
    <nav className={classes.header}>
      <h3>Site's name</h3>
      <ul>
        <Link to="/">
          <li>Home page</li>
        </Link>
        <Link to="/colors">
          <li>Colors</li>
        </Link>
        <Link to="/portfolio">
          <li>Portfolio</li>
        </Link>
        <Link to="/custom-design">
          <li>Custom design</li>
        </Link>
      </ul>
      <HiOutlineMagnifyingGlass className={classes.search} />
      <Link to="/cart">
      <button>
          Cart
          <BsCart2 className={classes.cart} />
      </button>
      </Link>
    </nav>
  );
}
