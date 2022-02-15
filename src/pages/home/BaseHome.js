// styles
import "./BaseHome.css";

import { Link } from "react-router-dom";
export default function BaseHome() {
  return (
    <div className="base-home">
      <h1 className="base-brand">🤖 myMoney</h1>
      <h1 className="base-welcome">Welcome User!</h1>
      <h2 className="base-head">This App lets you keep track of your transactions!!</h2>
      <p className="base-body">
        Please{" "}
        <Link to="/signup" className="link">
          Sign-up
        </Link>{" "}
        or{" "}
        <Link to="/login" className="link">
          Login
        </Link>{" "}
        to get the expericence.{" "}
      </p>
    </div>
  );
}
