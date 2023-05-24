import Room from "../Room";

export default function GoldRoom1(props) {
  const getSource = () => {
    if (props.flashlightOn) {
      return "/images/goldRoom/Raum_Gold_1_Dunkel.png";
    } else {
      return "/images/goldRoom/Raum_Gold_1_Hell.png";
    }
  };

  return (
    <Room
      title="Goldenes Zimmer"
      src={getSource()}

      hasLeft={true}
      leftRoute="/Escape-Room/goldenesZimmer2"

      hasRoom={true}
      roomText="Zum Blauen Zimmer ->"
      roomRoute="/Escape-Room/blauesZimmer2"
    ></Room>
  );
}
