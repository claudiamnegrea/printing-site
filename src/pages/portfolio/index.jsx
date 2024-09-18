import { useEffect, useState } from "react";
import ProductTile from "../../components/product-tile";
import classes from "../style.module.css";
import classes_products from "./style.module.css";
import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function Portfolio() {
  const [loading, setLoading] = useState(false);
  const [countElements, setCountElements] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const { listOfProducts, setListOfProducts, search, showSearch ,setProductData} =
    useContext(GlobalContext);

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
        setProductData(null)
      }
      console.log(result);
      console.log(result_cat);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  const handleCategories = (e) => {
    setSortType("relevant");
    handleSort();
    if (selectedCategories.includes(e.target.value)) {
      setSelectedCategories((prev) =>
        prev.filter((item) => item !== e.target.value)
      );
    } else {
      setSelectedCategories((prev) => [...prev, e.target.value]);
    }
    console.log(selectedCategories);
  };

  function filterProducts() {
    let productsCopy = listOfProducts.slice();
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (selectedCategories && selectedCategories.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        selectedCategories.includes(item.category)
      );
    }
    if (productsCopy) {
      setFilteredItems(
        listOfProducts.filter((item) => productsCopy.includes(item))
      );
    }
  }

  function handleClearFilter() {
    setSelectedCategories([]);
  }

  function handleSort() {
    let fpCopy = filteredItems.slice();

    switch (sortType) {
      case "low-high":
        setFilteredItems(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilteredItems(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        filterProducts();
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, [countElements]);

  useEffect(() => {
    filterProducts();
  }, [selectedCategories, search, showSearch]);

  useEffect(() => {
    handleSort();
  }, [sortType]);

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
                    <p
                      className={classes_products.clear_filters}
                      onClick={handleClearFilter}
                    >
                      Clear Filters
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
            <div className={classes_products.main_body}>
              <div className={classes_products.sort}>
                <select
                  onChange={(e) => setSortType(e.target.value)}
                  value={sortType}
                >
                  <option value="relevant">Sort by Relevant</option>
                  <option value="high-low">Sort by Price(high to low)</option>
                  <option value="low-high">Sort by Price(low to high)</option>
                </select>
              </div>
              <div className={classes_products.product_tiles}>
                {filteredItems.length > 0
                  ? filteredItems.map((productItem) => (
                      <ProductTile product={productItem} />
                    ))
                  : null}
              </div>
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
