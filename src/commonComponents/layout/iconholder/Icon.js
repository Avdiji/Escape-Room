import { Link } from "react-router-dom";
import classes from "./Icon.module.css";

export default function Icon(props) {
  return (
    <Link>
      <div className={classes.icon} onClick={props.onClick}>
        <img src={props.src} alt="" />
      </div>
    </Link>
  );
}
