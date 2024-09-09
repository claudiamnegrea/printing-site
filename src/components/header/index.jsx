import { Link } from "react-router-dom";
import classes from "./style.module.css";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { BsCart2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function Header() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <nav className={classes.header}>
        <h3>Site's name</h3>
        <ul className={classes.links}>
          <NavLink to="/">
            <li>Home page</li>
          </NavLink>
          <NavLink to="/colors">
            <li>Colors</li>
          </NavLink>
          <NavLink to="/portfolio">
            <li>Portfolio</li>
          </NavLink>
          <NavLink to="/custom-design">
            <li>Custom design</li>
          </NavLink>
        </ul>
        <HiOutlineMagnifyingGlass className={classes.search} />
        <div className={classes.dropdown}>
          <CgProfile className={classes.profile} />
          <div className={classes.profile_items}>
            <p>Orders</p>
            <p>Logout</p>
          </div>
        </div>
        <SlMenu onClick={() => setVisible(true)} className={classes.menu} />
        <Link to="/cart" className={classes.cart}>
          <button>
            Cart
            <div className={classes.cart_icon_number}>
              <BsCart2 className={classes.cart_icon} />
              <p className={classes.number}>10</p>
            </div>
          </button>
        </Link>
        {visible ? (
          <div className={classes.open_menu}>
            <FaArrowLeft />
            <p
              onClick={() => setVisible(false)}
              className={classes.back_button}
            >
              Back
            </p>
              <NavLink to="/" onClick={() => setVisible(false)}>
                <li>Home page</li>
              </NavLink>
              <NavLink to="/colors" onClick={() => setVisible(false)}>
                <li>Colors</li>
              </NavLink>
              <NavLink to="/portfolio" onClick={() => setVisible(false)}>
                <li>Portfolio</li>
              </NavLink>
              <NavLink to="/custom-design" onClick={() => setVisible(false)}>
                <li>Custom design</li>
              </NavLink>
          </div>
        ) : null}
      </nav>
    </div>
  );
}
