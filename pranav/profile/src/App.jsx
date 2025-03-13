import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Portfolio";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
