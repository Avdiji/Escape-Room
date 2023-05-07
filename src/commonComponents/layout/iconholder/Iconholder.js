import Icon from "./Icon";
import classes from "./Iconholder.module.css";
import { useState } from "react";

export default function Iconholder(props) {
  var toggleFlashlight = () => {
    if (props.flashlightOn) {
      document.body.style.backgroundColor = "rgb(210, 210, 210)";
    } else {
      document.body.style.backgroundColor = "rgb(74, 74, 74)";
    }
    props.setFlashlight(!props.flashlightOn);
  };

  return (
    <div className={classes.iconholder}>
      <Icon
        src={process.env.PUBLIC_URL + "/flashlightIcon.png"}
        onClick={toggleFlashlight}
      />
      <Icon src={process.env.PUBLIC_URL + "/notebookIcon.png"} onClick={props.openNotebook} />
    </div>
  );
}
