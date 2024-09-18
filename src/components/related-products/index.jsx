import { useContext, useState } from "react";
import ProductTile from "../product-tile/";
import { GlobalContext } from "../../context";
import { useEffect } from "react";
import classes from "./style.module.css";

export default function RelatedProducts({ category }) {
  const { listOfProducts } = useContext(GlobalContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (listOfProducts && listOfProducts.length > 0) {
      let listCopy = listOfProducts.slice();
      listCopy = listCopy.filter((item) => category === item.category);
      setRelated(listCopy);
      console.log(listCopy);
    }
  }, [category]);

  console.log(related);

  return (
    <div className={classes.related_products}>
      {related
        ? related.map((productItem) => <ProductTile product={productItem} />)
        : null}
    </div>
  );
}
