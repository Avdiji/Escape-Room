import HintMarker from "../../commonComponents/hintMarker/HintMarker";
import Room from "../Room";

export default function JapaneseRoom1(props) {
  const getSource = () => {
    if (props.flashlightOn) {
      return "/images/japaneseRoom/Raum_japanisch_1_Dunkel.png";
    } else {
      return "/images/japaneseRoom/Raum_japanisch_1_Hell.png";
    }
  };

  return (
    <Room title="Japanisches Zimmer" src={getSource()}
    hasRoom={true}
    roomText="Zum Goldenen Zimmer ->"
    roomRoute="/Escape-Room/goldenesZimmer2"

    hasLeft={true}
    leftRoute="/Escape-Room/japanischesZimmer2"
    
    >
      <HintMarker x="29.5vw" y="-13vw" size="3vw">
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/japaneseRoom/Japanisch_Holzspiegel_close_up.png"
          }
        />
      </HintMarker>
    </Room>
  );
}
