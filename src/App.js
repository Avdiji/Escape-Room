import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./commonComponents/layout/Layout";
import { useState } from "react";
import BlueRoomExit from "./pages/blueRoom/BlueRoomExit";
import BlueRoom2 from "./pages/blueRoom/BlueRoom2";
import GoldRoom1 from "./pages/goldRoom/GoldRoom1";
import GoldRoom2 from "./pages/goldRoom/GoldRoom2";
import JapaneseRoom1 from "./pages/japaneseRoom/JapaneseRoom1";
import JapaneseRoom2 from "./pages/japaneseRoom/JapaneseRoom2";
import JapaneseRoom3 from "./pages/japaneseRoom/JapaneseRoom3";
import BlueCeiling from "./pages/blueRoom/BlueCeiling";

export default function App() {
  var [flashlightOn, setFlashlight] = useState(false);
  var [leftBlueRoom, setLeftBlueRoom] = useState(false);
  var [getArrowCombination] = useState([0, 0, 0, 0, 0]);
  var [gameFinished,setGameFinished] = useState(false);

  return (
    <Router>
      {!gameFinished && <div>
      <Layout setFlashlight={setFlashlight} flashlightOn={flashlightOn}>
        <Routes>
          <Route path="/Escape-Room" element={<BlueRoomExit flashlightOn={flashlightOn} />} />
          <Route path="/Escape-Room/blauesZimmer2" element={<BlueRoom2 flashlightOn={flashlightOn} getArrowCombination={getArrowCombination} /> } />
          <Route path="Escape-Room/blaueDecke" element={<BlueCeiling flashlightOn={flashlightOn}/>} />

          <Route path="/Escape-Room/goldenesZimmer1" element={<GoldRoom1 flashlightOn={flashlightOn} setGameFinished={setGameFinished}/>}/>
          <Route path="/Escape-Room/goldenesZimmer2" element={<GoldRoom2 flashlightOn={flashlightOn}/>}/>

          <Route path="/Escape-Room/japanischesZimmer1" element={<JapaneseRoom1 flashlightOn={flashlightOn} />} />
          <Route path="/Escape-Room/japanischesZimmer2" element={<JapaneseRoom2 flashlightOn={flashlightOn} />} />
          <Route path="/Escape-Room/japanischesZimmer3" element={<JapaneseRoom3 flashlightOn={flashlightOn} />} />
        </Routes>
      </Layout>
      </div>}

      {gameFinished && <h2>Glückwunsch, du hast Sieg's Namen herausgefunden und bist aus dem Schloss entkommen</h2>}
    </Router>
  );
}
