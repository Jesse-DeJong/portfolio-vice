import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from "./components/nav";
import Projects from "./pages/projects";
import Landing from "./pages/landing";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/portfolio-vice/" element={<Landing />} />
        <Route exact path="/portfolio-vice/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
