import { Link } from "react-router-dom";
import CardEffect from "../commonComponents/cardEffect/CardEffect";
import BluePuzzleButton from "../commonComponents/dresser/blueDrawer/BluePuzzleButton";
import classes from "./Room.module.css";
import { useState } from "react";

export default function Room(props) {
  const imgSource = process.env.PUBLIC_URL + props.src;

  return (
    <div className={classes.room}>
      <h1>{props.title}</h1>

      <Link>
        <img className={classes.arrowImg} src={process.env.PUBLIC_URL + "/images/roomArrows/arrowUp.png"} alt="" />
      </Link>

      <div className={classes.scrollContainer}>
        <div className={classes.arrowImageContainer}>
          <Link>
            <img className={classes.arrowImg} src={process.env.PUBLIC_URL + "/images/roomArrows/arrowLeft.png"} alt="" />
          </Link>

          <div className={classes.roomContainer}>
            <img className={classes.roomImg} src={imgSource} alt="" />
            {props.children}
          </div>

          <Link>
            <img className={classes.arrowImg} src={process.env.PUBLIC_URL + "/images/roomArrows/arrowRight.png"} alt="" />
          </Link>
        </div>
      </div>

      <Link>
        <img className={classes.arrowImg} src={process.env.PUBLIC_URL + "/images/roomArrows/arrowDown.png"} alt="" />
      </Link>
    </div>
  );
}
