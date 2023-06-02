import HintMarker from "../../commonComponents/hintMarker/HintMarker";
import Room from "../Room";

export default function BlueCeiling(props) {

  const getSource = () => {
    if (props.flashlightOn) {
      return  "/images/blueRoom/Blau_decke_dunkel.png";
    } else {
      return "/images/blueRoom/Blau_decke_hell.png";
    }
  };

  return (
    <Room
      title="Blaues Zimmer"
      src={getSource()}
      hasDown={true}
      downRoute={"/Escape-Room"}
    >
      <HintMarker x="24vw" y="-20vw"><img src={process.env.PUBLIC_URL + "/images/blueRoom/Blau_Decke_zoom.png"}/></HintMarker>
    </Room>
  );
}
