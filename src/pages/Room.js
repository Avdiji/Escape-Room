import CardEffect from "../commonComponents/cardEffect/CardEffect";
import BluePuzzleButton from "../commonComponents/dresser/blueDrawer/BluePuzzleButton";
import classes from "./Room.module.css";
import { useState } from "react";

export default function Room(props) {
  var [getArrowCombination] = useState([0, 0, 0, 3, 0]);
  const imgSource = process.env.PUBLIC_URL + props.src;

  return (
    <div className={classes.room}>
        <h1>{props.title}</h1>
      <img
        className={classes.arrowImg}
        src={process.env.PUBLIC_URL + "/images/roomArrows/arrowUp.png"}
        alt=""
      />

      <div className={classes.scrollContainer}>
        <div className={classes.arrowImageContainer}>
          <img
            className={classes.arrowImg}
            src={process.env.PUBLIC_URL + "/images/roomArrows/arrowLeft.png"}
            alt=""
          />

          <div className={classes.roomContainer}>
            <img className={classes.roomImg} src={imgSource} alt="" />
            {props.children}
          </div>

          <img
            className={classes.arrowImg}
            src={process.env.PUBLIC_URL + "/images/roomArrows/arrowRight.png"}
            alt=""
          />
        </div>
      </div>

      <img
        className={classes.arrowImg}
        src={process.env.PUBLIC_URL + "/images/roomArrows/arrowDown.png"}
        alt=""
      />
    </div>
  );
}
