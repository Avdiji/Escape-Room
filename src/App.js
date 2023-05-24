import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./commonComponents/layout/Layout";
import { useState } from "react";
import BlueRoomExit from "./pages/blueRoom/BlueRoomExit";
import BlueRoom2 from "./pages/blueRoom/BlueRoom2";
import GoldRoom1 from "./pages/goldRoom/GoldRoom1";
import GoldRoom2 from "./pages/goldRoom/GoldRoom2";

export default function App() {
  var [flashlightOn, setFlashlight] = useState(false);
  var [leftBlueRoom, setLeftBlueRoom] = useState(false);
  var [getArrowCombination] = useState([0, 0, 0, 3, 0]);

  return (
    <Router>
      <Layout setFlashlight={setFlashlight} flashlightOn={flashlightOn}>
        <Routes>
          <Route path="/Escape-Room" element={<BlueRoomExit flashlightOn={flashlightOn} />} />
          <Route path="/Escape-Room/blauesZimmer2" element={<BlueRoom2 flashlightOn={flashlightOn} getArrowCombination={getArrowCombination} /> } />

          <Route path="/Escape-Room/goldenesZimmer1" element={<GoldRoom1 flashlightOn={flashlightOn}/>}/>
          <Route path="/Escape-Room/goldenesZimmer2" element={<GoldRoom2 flashlightOn={flashlightOn}/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}
