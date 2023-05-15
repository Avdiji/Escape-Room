import { useState } from "react";
import classes from "./HintMarker.module.css";
import { Link } from "react-router-dom";
import Backdrop from "../backdrop/Backdrop";

export default function HintMarker(props) {
  const [isSelected, setSelected] = useState(false);

  const x = props.x;
  const y = props.y;

  const backgroundColor = props.backgroundColor;
  const opacity = props.opacity;

  const markerStyle = {
    left: x,
    top: y,
    backgroundColor: backgroundColor,
    opacity: opacity
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      setSelected(false);
    }
  };

  return (
    <Link>
      <div className={classes.hintMarker} style={markerStyle} onClick={() => setSelected(true)}/>
      {isSelected && <Backdrop onClick={handleBackdropClick}>{props.children}</Backdrop>}
    </Link>
  );
}
