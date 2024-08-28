import classes from "./style.module.css";

export default function ProductTile() {
  return <div className={classes.wrapper}>
    <div className={classes.photo}>
        Some photo
    </div>
    <div className={classes.name}>
        Product name
    </div>
    <div className={classes.price}>
        Product price
    </div>
    <div className={classes.buttons}>
        <button className={classes.see_button}>
            See product
        </button>
        <button className={classes.buy_button}>
            Add to cart
        </button>
    </div>
  </div>;
}
