import React, { useState } from "react";
import classes from "./GoldPuzzleButton.module.css";
import HintMarker from "../../hintMarker/HintMarker";

export default function GoldPuzzleButton(props) {
  const [letter1, setLetter1] = useState(props.getGoldPuzzleCombination[0]);
  const [letter2, setLetter2] = useState(props.getGoldPuzzleCombination[1]);


  const handleInputChange = (event, i) => {
    props.getGoldPuzzleCombination[i] = event.target.value.toUpperCase();
    if(i === 0){
      setLetter1(event.target.value.toUpperCase());
    }else{
      setLetter2(event.target.value.toUpperCase());
    }
  };

  function checkCombination() {
    if (props.getGoldPuzzleCombination[0] === "G" && props.getGoldPuzzleCombination[1] === "Z") {
      alert("Du hast das Rätsel des goldenen Zimmers gelöst. Dein Hinweis lautet -> Schwert: i");
    } else {
      alert("Deine Kombination ist nicht korrekt. Finde die korrekte Kombination, um die Schublade zu öffnen!");
    }
  }

  return (
    <HintMarker opacity="1" backgroundColor="yellow" x={props.x} y={props.y} size="1.7vw">
      <div className={classes.goldPuzzleButton}>
        <input maxLength={1} value={letter1} onChange={(event) => handleInputChange(event, 0)} />
        <input maxLength={1} value={letter2} onChange={(event) => handleInputChange(event, 1)} />
        <button onClick={checkCombination}>UNLOCK</button>
      </div>
    </HintMarker>
  );
}
