<<<<<<< Updated upstream:src/pages/portfolio/index.jsx
import Header from "../../components/header";

export default function Portfolio() {
  return (
    <div>
      Portfolio
    </div>
  );
}
=======
import ProductTile from "../../components/product-tile";
import classes from "../style.module.css";
import classes_products from "./style.module.css";

export default function Portfolio() {
  return (
    <div >
      <p className={classes.title}>PORTFOLIO</p>
      <div className={classes_products.product_tiles}>
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
      </div>
    </div>
  );
}
>>>>>>> Stashed changes:printing-site/src/pages/portfolio/index.jsx
