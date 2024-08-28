import classes from "./style.module.css";

export default function ColorTile() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.photo}>Color image</div>
      <h2> Color name</h2>
    </div>
  );
}
