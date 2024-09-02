import classes from "./style.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cart-slice";

export default function CartTile({ cartItem }) {

  const dispatch = useDispatch();
  function handleRemove() {
    dispatch(removeFromCart(cartItem.id));
  }
  return (
    <div className={classes.product_tile}>
      <img
        src={cartItem.image}
        alt={cartItem.title}
        className={classes.image}
      />
      <div className={classes.text}>
        <p className={classes.name}>{cartItem.title}</p>
        <p className={classes.price}>{cartItem.price}</p>
        <button onClick={handleRemove}>
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
}
