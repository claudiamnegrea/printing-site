import { Select } from "@chakra-ui/react";
import classes from "./style.module.css";
import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function PlaceOrder() {
    const { totalCart, shippingFee } = useContext(GlobalContext);
    return (
        <div className={classes.wrapper}>
            <div className={classes.left}>
                <h1>Customer's Data</h1>
                <div className={classes.name}>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                </div>
                <input type="phone" placeholder="Phone" />
                <input type="text" placeholder="Email Address" />
                <input type="text" placeholder="Street" />
                <div className={classes.location}>
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="State" />
                </div>
                <div className={classes.location2}>
                    <input type="text" placeholder="Zip code" />
                    <input type="text" placeholder="Country" />
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.payment_method}>
                    <h1>Payment Method</h1>
                    <div className={classes.payment}>
                        <label>
                            <input type="radio" value="cart" />
                            Card
                        </label>
                        <label>
                            <input type="radio" value="cash" />
                            Cash
                        </label>
                    </div>
                </div>
                <div className={classes.summary}>
                    <h1>Total Summary</h1>
                    <p>Total: {totalCart}</p>
                    <p>Shipping: {shippingFee}</p>
                    <h2>Total Cost: {totalCart + shippingFee}</h2>
                </div>
                <div className={classes.order}>
                    <button className={classes.place_order}><h1>Place order</h1></button>
                </div>
            </div>
        </div>
    );
}
