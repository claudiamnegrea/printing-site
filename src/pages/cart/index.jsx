import classes from "../style.module.css";
import cart_class from "./style.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);
  console.log(cart, totalCart);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      <div className={classes.title}>Cart</div>
      <div>
        <div className={cart_class.wrapper}>
          <div className={cart_class.products}>
            <p>List of products</p>
            {cart.map((cartItem) => (
              <div className={cart_class.product_tile}>
                <img
                  src={cartItem.image}
                  alt={cartItem.title}
                  className={cart_class.image}
                />
                <div className={cart_class.text}>
                  <p className={cart_class.name}>{cartItem.title}</p>
                  <p className={cart_class.price}>{cartItem.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={cart_class.total}><p>Total</p></div>
        </div>
      </div>
    </div>
  );
}
