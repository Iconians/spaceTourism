import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Crew } from "./pages/Crew/Crew";
import { Destination } from "./pages/Destination/Destination";
import { Technology } from "./pages/Technology/Technology";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Crew" element={<Crew />} />
          <Route path="/Technology" element={<Technology />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
