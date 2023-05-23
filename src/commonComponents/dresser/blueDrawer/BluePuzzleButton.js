import HintMarker from "../../hintMarker/HintMarker";
import BluePuzzle from "./bluePuzzle/BluePuzzle";

export default function BluePuzzleButton(props) {
  return (
    <HintMarker opacity="1" backgroundColor="blue" x={props.x} y={props.y} size="1.7vw">
        <BluePuzzle getArrowCombination={props.getArrowCombination}/>
    </HintMarker>
  );
}
