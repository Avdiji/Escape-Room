import classes from "./BluePuzzleSegment.module.css";
import { useState } from "react";

export default function BluePuzzleSegment(props) {
  const [getImage, setImage] = useState(getImgSrc());

  function getImgSrc() {
    var imgSrc = "";

    switch (props.getArrowCombination[props.arrowIndex]) {
      case 0:
        imgSrc = "/images/arrows/arrowDown.png";
        break;
      case 1:
        imgSrc = "/images/arrows/arrowRight.png";
        break;
      case 2:
        imgSrc = "/images/arrows/arrowUp.png";
        break;
      case 3:
        imgSrc = "/images/arrows/arrowLeft.png";
        break;
      default:
        imgSrc = "";
    }
    return imgSrc;
  }

  const onSegmentClick = () => {
    const currentVal = props.getArrowCombination[props.arrowIndex]

    props.getArrowCombination[props.arrowIndex] = currentVal === 3 ? 0 : currentVal + 1;
    setImage(getImgSrc());
  };

  return (
    <div className={classes.bluePuzzleSegment} onClick={onSegmentClick}>
      <img src={process.env.PUBLIC_URL + getImage} alt="" />
    </div>
  );
}
