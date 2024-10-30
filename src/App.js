import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './components/Landingpage';
import Aboutme from './components/Aboutme';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home route with Landingpage and Aboutme sections */}
        <Route
          path="/"
          element={
            <>
              <Landingpage />
              <Aboutme />
            </>
          }
        />
        {/* Separate routes for Projects and Contact pages */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;