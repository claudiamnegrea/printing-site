import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";
import classes from "./style.module.css";

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
      <p className={classes.title}>{productData?.title}</p>
      <div className={classes.content}>
        <img
          src={productData?.image}
          alt={productData?.title}
          className={classes.image}
        />
        <div className={classes.details}>
          <div className={classes.firstrow}>
            <div className={classes.price}>{productData?.price}</div>
            <button className={classes.cart}>Add to cart</button>
          </div>
          <p className={classes.description}>{productData?.description}</p>
        </div>
      </div>
    </div>
  );
}
