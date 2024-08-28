import classes from "./styles.module.css";

export default function Footer() {
  return (
    <div className={classes.wrapper}>
      <div>
        <h1>About us</h1>
      </div>
      <div>
        <h1>Contact</h1>
        <div className={classes.phone}>
          <p>Phone</p>
          <p>0111 111 111</p>
        </div>
        <div className={classes.email}>
          <p>e-mail</p>
          <p>email@gmail.com</p>
        </div>
        <div className={classes.insta}>
          <p>Instagram</p>
          <p>@instagram</p>
        </div>
      </div>
      <div>
        <h1>Guides</h1>
        <p>How to order</p>
      </div>
      <div>
        <h1>Legal</h1>
        <p>Terms & Conditions</p>
        <p>Policy</p>
      </div>
    </div>
  );
}
