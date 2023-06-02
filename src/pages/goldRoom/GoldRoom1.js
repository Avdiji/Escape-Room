import { useEffect, useState } from "react";
import HintMarker from "../../commonComponents/hintMarker/HintMarker";
import Room from "../Room";
import Backdrop from "../../commonComponents/backdrop/Backdrop";

export default function GoldRoom1(props) {
  const [nameDialog, setNameDialog] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      setNameDialog(false);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value.toUpperCase());
  };

  useEffect(() =>{
    if(inputValue === "SIEG"){
      props.setGameFinished(true);
    }
  }, [inputValue]);

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
    >
      {props.flashlightOn && (
        <HintMarker x="18vw" y="-13vw">
          <h2>
            Hallo und Willkommen in meinem Schloss.
            <br />
            Wenn du das Rätsel des goldenen Raums lösen möchtest musst du im Kerzenlicht pokern!
            <br />
            Aber pass auf... Nicht das dir die Zeit abläuft.
          </h2>

          <div>
            <button onClick={() => setNameDialog(true)}>
              Ich kenne deinen Namen
            </button>
            {nameDialog && (
              <Backdrop onClick={handleBackdropClick}>
                <h2>Dein Name Lautet:</h2>
                <input maxLength={4} value={inputValue} onChange={handleInputChange} />
              </Backdrop>
            )}
          </div>
        </HintMarker>
      )}
    </Room>
  );
}
