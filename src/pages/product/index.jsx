import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";
import classes from "./style.module.css";
import { Select } from "@chakra-ui/react";
import { colors } from "../../data.js";
import { addToCart } from "../../store/cart-slice.js";
import { useDispatch } from "react-redux";
import RelatedProducts from "../../components/related-products/index.jsx";

export default function Product() {
  const { id } = useParams();
  const { productData, setProductData } = useContext(GlobalContext);
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  async function getProductDetails() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const result = await response.json();
      if (result) {
        setProductData(result);
      }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getProductDetails();
  }, [productData]);

  function handleAddToCart() {
    dispatch(addToCart(productData));
  }

  return (
    <div>
      <div className={classes.page}>
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
                <Select
                  className={classes.colors}
                  placeholder="Select Color"
                  onChange={(event) => {
                    setColor(event.target.value);
                  }}
                >
                  {colors.map((color) => (
                    <option value={color.value}>{color.label}</option>
                  ))}
                </Select>
                <button
                  disabled={color === ""}
                  className={classes.cart}
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              </div>
              <p className={classes.description}>{productData?.description}</p>
            </div>
          </div>
        </div>
        <div className={classes.related_div}>
          <h1>Related products</h1>
          <div className={classes.related_products}>
            <RelatedProducts category={productData?.category} />
          </div>
        </div>
      </div>
    </div>
  );
}
