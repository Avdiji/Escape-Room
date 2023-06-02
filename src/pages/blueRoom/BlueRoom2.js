import BluePuzzleButton from "../../commonComponents/dresser/blueDrawer/BluePuzzleButton";
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
        x="47.5vw"
        y="-9vw"
      />
    </Room>
  );
}
