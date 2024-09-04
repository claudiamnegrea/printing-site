import classes from "./style.module.css";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

export default function ProductTile({ product }) {
  const dispatch = useDispatch();
  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  return (
    <div className={classes.wrapper}>
      <img
        className={classes.photo}
        src={product?.image}
        alt={product?.title}
      />
      <div className={classes.name}>{product?.title}</div>
      <div className={classes.price}>{product?.price}</div>
      <div className={classes.buttons}>
        <Link to={`/product/${product?.id}`}>
          <button className={classes.see_button}>See product</button>
        </Link>
        <button className={classes.buy_button} onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
