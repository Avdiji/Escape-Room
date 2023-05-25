import HintMarker from "../../commonComponents/hintMarker/HintMarker";
import Room from "../Room";

export default function JapaneseRoom3(props) {
  const getSource = () => {
    if (props.flashlightOn) {
      return "/images/japaneseRoom/Raum_japanisch_2_Dunkel.png";
    } else {
      return "/images/japaneseRoom/Raum_japanisch_2_Hell.png";
    }
  };

  return (
    <Room title="Japanisches Zimmer" src={getSource()}

    hasRight={true}
    rightRoute="/Escape-Room/japanischesZimmer2"
    >
    </Room>
  );
}
