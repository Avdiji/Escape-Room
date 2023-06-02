import CardEffect from "../../../cardEffect/CardEffect";
import classes from "./BluePuzzle.module.css";
import BluePuzzleSegment from "./BluePuzzleSegment";

export default function BluePuzzle(props) {
  const correctCombination = [1, 0, 0, 1, 3];

  function checkCombination() {
    const areEqual =
      correctCombination.length === props.getArrowCombination.length &&
      correctCombination.every(
        (value, index) => value === props.getArrowCombination[index]
      );

    if (areEqual) {
      alert("Du hast das Rätsel des blauen Zimmers gelöst. Dein Hinweis lautet -> Schwert: i");
    } else {
      alert("Deine Kombination ist nicht korrekt. Finde die korrekte Kombination um die Schublade zu öffnen!");
    }
  }

  return (
    <CardEffect>
      <div className={classes.bluePuzzle}>
        <div className={classes.segmentContainer}>
          <BluePuzzleSegment arrowIndex={0} getArrowCombination={props.getArrowCombination} />
          <BluePuzzleSegment arrowIndex={1} getArrowCombination={props.getArrowCombination} />
          <BluePuzzleSegment arrowIndex={2} getArrowCombination={props.getArrowCombination} />
          <BluePuzzleSegment arrowIndex={3} getArrowCombination={props.getArrowCombination} />
          <BluePuzzleSegment arrowIndex={4} getArrowCombination={props.getArrowCombination} />
        </div>
        <button onClick={checkCombination}>UNLOCK</button>
      </div>
    </CardEffect>
  );
}
