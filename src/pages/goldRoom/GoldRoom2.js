import HintMarker from "../../commonComponents/hintMarker/HintMarker";
import Room from "../Room";

export default function GoldRoom2(props) {
  const getSource = () => {
    if (props.flashlightOn) {
      return "/images/goldRoom/Raum_Gold_2_Dunkel.png";
    } else {
      return "/images/goldRoom/Raum_Gold_2_Hell.png";
    }
  };

  return (
    <Room
      title="Goldenes Zimmer"
      src={getSource()}
      hasRight={true}
      rightRoute="/Escape-Room/goldenesZimmer1"

      hasRoom={true}
      roomText="<- Zum Japanischen Zimmer"
      roomRoute="/Escape-Room/japanischesZimmer1"
    >
      <HintMarker x="28.5vw" y="-25.5vw" size="2vw">
        <img src={ process.env.PUBLIC_URL + "/images/goldRoom/Gold_Uhr_close_up.png"}/>
      </HintMarker>

      <HintMarker x="30vw" y="-12vw" size="4vw">
        <img src={ process.env.PUBLIC_URL + "/images/goldRoom/Gold_Tisch_close_up.png"}/>
      </HintMarker>
    </Room>
  );
}
