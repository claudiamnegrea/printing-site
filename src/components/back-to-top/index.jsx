import { useEffect } from "react";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import classes from "./style.module.css";

export default function BackToTop() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  function handleScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      {backToTopButton && (
        <button onClick={handleScrollTop} className={classes.button}>
          <FaArrowUp className={classes.arrow}

          />
        </button>
      )}
    </div>
  );
}
