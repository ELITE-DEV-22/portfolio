import Landingpage from "./components/Landingpage";
import Aboutme from './components/Aboutme';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router basename="/portfolio">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/about-me" element={<Aboutme/>} />
      </Routes>
    </Router>
  );
}
/* hello world */ 

export default App;