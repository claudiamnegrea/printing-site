<<<<<<< Updated upstream:src/pages/colors/index.jsx
import Header from "../../components/header";

export default function Colors() {
  return (
    <div>
      Colors
    </div>
  );
}
=======
import ColorTile from "../../components/color-tile";
import classes from "./style.module.css";
import classes_page from '../style.module.css';

export default function Colors() {
  return (
    <div className={classes.wrapper}>
      <p className={classes_page.title}>COLORS</p>
      <div className={classes.color_tiles}>
        <ColorTile />
        <ColorTile />
        <ColorTile />
        <ColorTile />
      </div>
    </div>
  );
}
>>>>>>> Stashed changes:printing-site/src/pages/colors/index.jsx
