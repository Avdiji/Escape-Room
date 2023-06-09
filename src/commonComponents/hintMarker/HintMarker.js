import { useState } from "react";
import classes from "./HintMarker.module.css";
import { Link } from "react-router-dom";
import Backdrop from "../backdrop/Backdrop";

export default function HintMarker(props) {
  const [isSelected, setSelected] = useState(false);

  const x = props.x;
  const y = props.y;

  const backgroundColor = props.backgroundColor === null ? "rgb(179, 147, 147)" : props.backgroundColor;
  const opacity = props.opacity;
  const size = props.size;

  const markerStyle = {
    left: x,
    top: y,
    backgroundColor: backgroundColor,
    opacity: opacity,
    width: size,
    height: size
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      setSelected(false);
    }
  };

  return (
    <Link>
      <div className={classes.hintMarker} style={markerStyle} onClick={() => setSelected(true)}>{props.backgroundText}</div>
      {isSelected && <Backdrop onClick={handleBackdropClick}>{props.children}</Backdrop>}
    </Link>
  );
}
