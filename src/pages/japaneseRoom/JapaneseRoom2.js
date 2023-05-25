import HintMarker from "../../commonComponents/hintMarker/HintMarker";
import Room from "../Room";

export default function JapaneseRoom2(props) {
  const getSource = () => {
    if (props.flashlightOn) {
      return "/images/japaneseRoom/Raum_japanisch_3_Dunkel.png";
    } else {
      return "/images/japaneseRoom/Raum_japanisch_3_Hell_unveraendert.png"
    }
  };

  return (
    <Room title="Japanisches Zimmer" src={getSource()}

    hasRight={true}
    rightRoute="/Escape-Room/japanischesZimmer1"

    hasLeft={true}
    leftRoute="/Escape-Room/japanischesZimmer3"
    >
    </Room>
  );
}
