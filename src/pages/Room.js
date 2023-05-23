import { Link } from "react-router-dom";
import CardEffect from "../commonComponents/cardEffect/CardEffect";
import BluePuzzleButton from "../commonComponents/dresser/blueDrawer/BluePuzzleButton";
import classes from "./Room.module.css";
import { useState } from "react";

export default function Room(props) {
  const imgSource = process.env.PUBLIC_URL + props.src;

  const leftButtonStyle={ left: "5vw" };
  const rightButtonStyle={right: "5vw"};

  return (
    <div className={classes.room}>
      <h1>{props.title}</h1>

      {props.hasUp && (
        <Link to={props.upRoute}>
          <img
            className={classes.arrowImg}
            src={process.env.PUBLIC_URL + "/images/roomArrows/arrowUp.png"}
            alt=""
          />
        </Link>
      )}

      <div className={classes.scrollContainer}>
        <div className={classes.arrowImageContainer}>
          {props.hasLeft && (
            <Link to={props.leftRoute}>
              <img
                className={classes.arrowImg}
                src={
                  process.env.PUBLIC_URL + "/images/roomArrows/arrowLeft.png"
                }
                alt=""
              />
            </Link>
          )}

          <div>
            <img className={classes.roomImg} src={imgSource} alt="" />
            {props.children}
          </div>

          {props.hasRight && (
            <Link to={props.rightRoute}>
              <img
                className={classes.arrowImg}
                src={
                  process.env.PUBLIC_URL + "/images/roomArrows/arrowRight.png"
                }
                alt=""
              />
            </Link>
          )}
        </div>
      </div>

      <div className={classes.downButtonSegment}>
        {props.hasRoomLeft && <Link to={props.leftRoomRoute}><button style={leftButtonStyle}>{props.leftRoomText}</button></Link>}

        {props.hasDown && (
          <Link to={props.downRoute}>
            <img
              className={classes.arrowImg}
              src={process.env.PUBLIC_URL + "/images/roomArrows/arrowDown.png"}
              alt=""
            />
          </Link>
        )}

        {props.hasRoomRight && <Link to={props.rightRoomRoute}><button style={rightButtonStyle}>{props.rightRoomText}</button></Link>}
      </div>
    </div>
  );
}
