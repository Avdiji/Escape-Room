import HintMarker from "../../commonComponents/hintMarker/HintMarker";
import Room from "../Room";

export default function BlueRoomExit(props) {
  const getSource = () => {
    if (props.flashlightOn) {
      return "/images/blueRoom/Blau_Sc1_Dunkel_ohne_personcf.png";
    } else {
      return "/images/blueRoom/Blau_Sc1_Hellxcf.png";
    }
  };

  return (
    <Room
      title="Blaues Zimmer"
      src={getSource()}
      hasLeft={true}
      leftRoute="/Escape-Room/blauesZimmer2"
    >
      <HintMarker x="15vw" y="-25vw">
        <h2>Erster Hinweis</h2>
      </HintMarker>
    </Room>
  );
}
