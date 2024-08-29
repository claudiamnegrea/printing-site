import { useEffect, useState } from "react";
import ProductTile from "../../components/product-tile";
import classes from "../style.module.css";
import classes_products from "./style.module.css";

export default function Portfolio() {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchListOfProducts() {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();

    if (result) {
      setListOfProducts(result);
      setLoading(false);
      console.log(result);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div> Please wait </div>
      ) : (
        <div>
          <p className={classes.title}>PORTFOLIO</p>
          <div className={classes_products.product_tiles}>
            {listOfProducts && listOfProducts.length
              ? listOfProducts.map((productItem) => (
                  <ProductTile product={productItem} />
                ))
              : null}
          </div>
        </div>
      )}
    </div>
  );
}
