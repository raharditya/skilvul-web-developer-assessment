import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Playlist from "./components/pages/PlaylistDetails";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/playlist" element={<Playlist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
