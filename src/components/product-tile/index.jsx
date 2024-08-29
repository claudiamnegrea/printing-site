import classes from "./style.module.css";
import { Link } from "react-router-dom";

export default function ProductTile({ product }) {
  function handleSeeProduct() {
    return;
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
          <button className={classes.see_button} onClick={handleSeeProduct()}>
            See product
          </button>
        </Link>
        <button className={classes.buy_button}>Add to cart</button>
      </div>
    </div>
  );
}
