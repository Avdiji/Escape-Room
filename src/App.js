import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./commonComponents/layout/Layout";
import BluePuzzleButton from "./commonComponents/dresser/blueDrawer/BluePuzzleButton";
import { useState } from "react";
import Room from "./pages/Room";

export default function App() {
  var [flashlightOn, setFlashlight] = useState(false);
  var [getArrowCombination] = useState([0,0,0,3,0]);

  return (
    <Router>
      <Layout setFlashlight={setFlashlight} flashlightOn={flashlightOn}>
        <Room title="Blaues Zimmer" src="/images/blueRoom/Blau_Sc1_Hellxcf.png">
          <BluePuzzleButton getArrowCombination={getArrowCombination} x="15vw" y="-25vw"/>
        </Room>
      </Layout>
    </Router>
  );
}
