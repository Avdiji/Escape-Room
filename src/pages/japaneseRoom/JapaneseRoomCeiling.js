import HintMarker from "../../commonComponents/hintMarker/HintMarker";
import Room from "../Room";

export default function JapaneseRoomCeiling(props) {
  const getSource = () => {
    if (props.flashlightOn) {
      return "/images/japaneseRoom/Japanisch_decke_Dunkel.png";
    } else {
      return "/images/japaneseRoom/Japanisch_decke_Hell.png";
    }
  };

  return (
    <Room
      title="Japanisches Zimmer"
      src={getSource()}
      hasDown={true}
      downRoute="/Escape-Room/japanischesZimmer3"
    ></Room>
  );
}
