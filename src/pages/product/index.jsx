import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";
import classes from "./style.module.css";
import { Select } from "@chakra-ui/react";
import { colors } from "../../data.js";
import { addToCart } from "../../store/cart-slice.js";

export default function Product() {
  const { id } = useParams();
  const { productData, setProductData } = useContext(GlobalContext);

  useEffect(() => {
    async function getProductDetails() {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const result = await response.json();
      if (result) {
        setProductData(result);
      }
    }
    getProductDetails();
  });

  return (
    <div className={classes.wrapper}>
      <img
        src={productData?.image}
        alt={productData?.title}
        className={classes.image}
      />
      <div className={classes.content}>
        <p className={classes.title}>{productData?.title}</p>
        <p className={classes.price}>{productData?.price}</p>
        <div className={classes.details}>
          <div className={classes.firstrow}>
            <Select className={classes.colors} placeholder="Select Color">
              {colors.map((color) => (
                <option value={color.value}>{color.label}</option>
              ))}
            </Select>
            <button className={classes.cart}>
              Add to cart
            </button>
          </div>
          <p className={classes.description}>{productData?.description}</p>
        </div>
      </div>
    </div>
  );
}
