import { useEffect, useState } from "react";
import classes from "./style.module.css";
import { Button } from "@chakra-ui/react";

export default function Login() {
  const [currentState, setCurrentState] = useState("Login");

  return (
    <div className={classes.form_wrapper}>
      <h1>{currentState}</h1>
      {currentState === "Login" ? (
        <div>
          <form>
            <input type="text" placeholder="User" />
            <input type="text" placeholder="Password" />
          </form>

          <p>
            <h3>Forgot password ? </h3>
            <h3 onClick={() => setCurrentState("Register")}>New client</h3>
          </p>
          <Button>Sign in</Button>
        </div>
      ) : (
        <div>
          <form>
            <input type="text" placeholder="User" />
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Please retype password" />
          </form>
          <p>
            <h3 onClick={() => setCurrentState("Login")}>
              Already have an account
            </h3>
          </p>
          <Button>Sign up</Button>
        </div>
      )}
    </div>
  );
}
