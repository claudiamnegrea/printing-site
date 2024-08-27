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
