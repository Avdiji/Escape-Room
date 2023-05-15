import HintMarker from "../../hintMarker/HintMarker";
import BluePuzzle from "./bluePuzzle/BluePuzzle";

export default function BluePuzzleButton(props) {
  return (
    <HintMarker opacity="1" backgroundColor="blue" x="100px" y="100px">
        <BluePuzzle getArrowCombination={props.getArrowCombination}/>
    </HintMarker>
  );
}
