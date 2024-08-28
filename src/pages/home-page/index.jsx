<<<<<<< Updated upstream:src/pages/home-page/index.jsx
import Header from "../../components/header";
import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function Home() {

  const {  pending, setPending } =
  useContext(GlobalContext);

  return (
    <div>
      Home page
    </div>
  );
}
=======
import { useContext } from "react";
import { GlobalContext } from "../../context";
import classes from '../style.module.css';

export default function Home() {

  const {  pending, setPending } =
  useContext(GlobalContext);

  return (
    <p className={classes.title}>
      Welcome !
    </p>
  );
}
>>>>>>> Stashed changes:printing-site/src/pages/home-page/index.jsx
