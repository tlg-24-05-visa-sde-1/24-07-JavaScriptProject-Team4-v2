import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import GreatHall from "./Pages/GreatHall/GreatHall";
import Gryffindor from "./Pages/CommonRooms/Gryffindor/Gryffindor";
import Hufflepuff from "./Pages/CommonRooms/Hufflepuff/Hufflepuff";
import Ravenclaw from "./Pages/CommonRooms/Ravenclaw/Ravenclaw";
import Slytherin from "./Pages/CommonRooms/Slytherin/Slytherin";

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<GreatHall />} />
        <Route path="/gryffindor" element={<Gryffindor />} />
        <Route path="/hufflepuff" element={<Hufflepuff />} />
        <Route path="/ravenclaw" element={<Ravenclaw />} />
        <Route path="/slytherin" element={<Slytherin />} />
      </Routes>
    </>
  );
}

export default App;
