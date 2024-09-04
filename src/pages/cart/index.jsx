import classes from "../style.module.css";
import cart_class from "./style.module.css";
import { useState, useEffect, useContext } from "react";
import CartTile from "../../components/cart-tile";
import { GlobalContext } from "../../context";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useContext(GlobalContext);

  console.log(cart, totalCart);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      <div className={classes.title}>Cart</div>

      <div className={cart_class.wrapper}>
        <div className={cart_class.products}>
          <p className={cart_class.total_products}>List of products</p>
          <div>
            {cart && cart.length ? (
              <div>
                {cart.map((cartItem) => (
                  <CartTile
                    cartItem={cartItem}
                    className={cart_class.CartTile}
                  />
                ))}
              </div>
            ) : (
              <div className={cart_class.empty}> Cart is empty</div>
            )}
          </div>
        </div>
        <div className={cart_class.total}>
          <p>Total items: {cart.length}</p>
          <p>Total: {totalCart}</p>
        </div>
      </div>
    </div>
  );
}
