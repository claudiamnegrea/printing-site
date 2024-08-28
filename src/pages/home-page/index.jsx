import { useContext } from "react";
import { GlobalContext } from "../../context";
import classes from "../style.module.css";

export default function Home() {
  const { pending, setPending } = useContext(GlobalContext);

  return <p className={classes.title}>Welcome !</p>;
}
