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

    hasUp={true}
    upRoute="/Escape-Room/japanischesZimmerDecke"
    >

      <HintMarker x="32vw" y="-17vw" size="3vw">
        <h2>Blick nach oben und suche die schlafende Frau!</h2>
      </HintMarker>
    </Room>
  );
}
