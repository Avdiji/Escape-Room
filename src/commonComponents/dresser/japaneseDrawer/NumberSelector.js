import classes from "./NumberSelector.module.css";
import CardEffect from "../../cardEffect/CardEffect";
import { useState } from "react";

export default function NumberSelector(props) {
  const [val, setVal] = useState(props.currentVal[props.index]);

  function onArrowClick(add) {
    var result = props.currentVal[props.index];

    if (add) {
      if (result === 9) {
        result = 0;
      } else {
        result = result + 1;
      }
    } else {
      if (result === 0) {
        result = 9;
      } else {
        result = result - 1;
      }
    }

    props.currentVal[props.index] = result;
    setVal(result);
  }

  return (
    <div className={classes.numberSelector}>
      <CardEffect>
        <img
          src={process.env.PUBLIC_URL + "/images/arrows/arrowUp.png"}
          onClick={() => onArrowClick(true)}
        />

        <h2>{val}</h2>

        <img
          src={process.env.PUBLIC_URL + "/images/arrows/arrowDown.png"}
          onClick={() => onArrowClick(false)}
        />
      </CardEffect>
    </div>
  );
}
