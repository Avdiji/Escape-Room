import BluePuzzleButton from "../../commonComponents/dresser/blueDrawer/BluePuzzleButton";
import GoldPuzzleButton from "../../commonComponents/dresser/goldDrawer/GoldPuzzleButton";
import JapanesePuzzleButton from "../../commonComponents/dresser/japaneseDrawer/JapanesePuzzleButton";
import Room from "../Room";

export default function BlueRoom2(props) {
  const getSource = () => {
    if (props.flashlightOn) {
      return "/images/blueRoom/blau2Dunkel.png";
    } else {
      return "/images/blueRoom/blau2Hell.png";
    }
  };

  return (
    <Room
      title="Blaues Zimmer"
      src={getSource()}
      hasRight={true}
      rightRoute="/Escape-Room"
      hasRoom={true}
      roomText="<- Zum Goldenen Zimmer"
      roomRoute="/Escape-Room/goldenesZimmer1"
    >
      <BluePuzzleButton
        getArrowCombination={props.getArrowCombination}
        x="47vw"
        y="-9vw"
      />

      <GoldPuzzleButton x="47vw" y="-8vw" getGoldPuzzleCombination={props.getGoldPuzzleCombination}/>
      <JapanesePuzzleButton x="47vw" y="-7.5vw" getJapanesePuzzleCombination={props.getJapanesePuzzleCombination}/>
    </Room>
  );
}
