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
      hasUp={true}
      upRoute="/Escape-Room/blaueDecke"
    >
      <HintMarker x="15vw" y="-25vw">
        <h2>Stern: S</h2>
      </HintMarker>

      <HintMarker x="15vw" y="-17vw">
        <img src={process.env.PUBLIC_URL + "/images/blueRoom/Striche.png"} />
      </HintMarker>

      <HintMarker x="57vw" y="-20vw">
        <img src={process.env.PUBLIC_URL + "/images/blueRoom/Wuefel.png"} />
      </HintMarker>

      <HintMarker x="33vw" y="-33vw">
        <h2>
          Willkommen in meinem Schloss.
          <br />
          Wenn du hier wieder raus möchtest musst du meinen Namen erraten.
          <br />
          Ich warte im Goldenen Zimmer auf dich. <br />
          PS: vergiss nicht die Taschenlampe zu benutzen.
        </h2>
      </HintMarker>
    </Room>
  );
}
