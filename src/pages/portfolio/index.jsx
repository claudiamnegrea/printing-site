import { useEffect, useState } from "react";
import ProductTile from "../../components/product-tile";
import classes from "../style.module.css";
import classes_products from "./style.module.css";

export default function Portfolio() {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [countElements, setCountElements] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);


  async function fetchListOfProducts() {
    try {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products`);
      const response_cat = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const result = await response.json();
      const result_cat = await response_cat.json();

      if (result) {
        setListOfProducts(result);
        setFilteredItems(result);
        setCategories(result_cat);
        setLoading(false);
      }
      console.log(result);
      console.log(result_cat);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  const handleCategories = (e) => {
    if (selectedCategories.includes(e.target.value)) {
      setSelectedCategories((prev) =>
        prev.filter((item) => item !== e.target.value)
      );
    } else {
      setSelectedCategories((prev) => [...prev, e.target.value]);
    }
    console.log((selectedCategories));
    
  };

  function filterProducts() {
    let productsCopy = listOfProducts.slice();
    if (selectedCategories && selectedCategories.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        selectedCategories.includes(item.category)
      );
    }
    console.log(productsCopy);
    if (productsCopy) {
      setFilteredItems(
        listOfProducts.filter((item) => productsCopy.includes(item))
      );
    }
  }
  function handleClearFilter() {
    setSelectedCategories([]);
  }
  useEffect(() => {
    fetchListOfProducts();
  }, [countElements]);

  useEffect(() => {
    filterProducts();
  }, [selectedCategories]);

  return (
    <div>
      {loading ? (
        <div> Please wait </div>
      ) : (
        <div>
          <p className={classes.title}>PORTFOLIO</p>
          <div className={classes_products.wrapper}>
            <div className={classes_products.filters}>
              <p className={classes_products.filter_title}>FILTERS</p>
              <div className={classes_products.filters_list}>
                {categories.map((cat) => (
                  <label>
                    <input
                      type="checkbox"
                      value={cat}
                      onChange={handleCategories}
                      checked={selectedCategories.includes(cat)}

                    />
                    {cat}
                  </label>
                ))}
              </div>
              <div>
                {selectedCategories && selectedCategories.length ? (
                  <div>
                    <p className={classes_products.clear_filters} onClick={handleClearFilter}>
                      Clear Filters
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
            <div className={classes_products.product_tiles}>
              {filteredItems.length > 0
                ? filteredItems.map((productItem) => (
                    <ProductTile product={productItem} />
                  ))
                : null}
            </div>
          </div>
          <div>
            <button
              disabled={disableButton}
              onClick={() => setCountElements(countElements + 1)}
              className="button-container"
            >
              Load more products
            </button>
            {disableButton ? <p>You have reached the limit</p> : null}
          </div>
        </div>
      )}
    </div>
  );
}
