import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from "./pages/projects";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/portfolio-vice/" element={<Home />} />
        <Route exact path="/portfolio-vice/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
