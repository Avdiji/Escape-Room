import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./commonComponents/layout/Layout";
import BluePuzzleButton from "./commonComponents/dresser/blueDrawer/BluePuzzleButton";
import { useState } from "react";
import Room from "./pages/Room";
import BlueRoomExit from "./pages/blueRoom/blueRoomExit/BlueRoomExit";

export default function App() {
  var [flashlightOn, setFlashlight] = useState(false);
  var [leftBlueRoom, setLeftBlueRoom] = useState(false);
  var [getArrowCombination] = useState([0, 0, 0, 3, 0]);

  return (
    <Router>
      <Layout setFlashlight={setFlashlight} flashlightOn={flashlightOn}>
        <Routes>
        <Route path="/Escape-Room" element={<BlueRoomExit flashlightOn={flashlightOn}/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}
