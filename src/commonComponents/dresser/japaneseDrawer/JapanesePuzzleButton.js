import HintMarker from "../../hintMarker/HintMarker";
import NumberSelector from "./NumberSelector";

export default function JapanesePuzzleButton(props) {
  function checkCombination() {

    if (props.getJapanesePuzzleCombination[0] === 1 && props.getJapanesePuzzleCombination[1] === 6) {
      alert("Du hast das Rätsel des japanischen Zimmers gelöst. Dein Hinweis lautet -> Katze: G");
    } else {
      alert("Deine Kombination ist nicht korrekt. Finde die korrekte Kombination um die Schublade zu öffnen!");
    }
  }


  return (
    <HintMarker
      opacity="1"
      backgroundColor="white"
      x={props.x}
      y={props.y}
      size="1.7vw"
      backgroundText="郵"
    >
        <NumberSelector currentVal={props.getJapanesePuzzleCombination} index={0}/>
        <NumberSelector currentVal={props.getJapanesePuzzleCombination} index={1}/>
        <button onClick={checkCombination}>UNLOCK</button>
    </HintMarker>
  );
}
