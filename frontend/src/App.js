import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import OverlayManagement from './Components/OverlayManagement';
import OverlaySettings from './Components/OverlaySettings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/overlay" element={<OverlayManagement />} />
        <Route path="/overlaySettings" element={<OverlaySettings />} />
      </Routes>
    </Router>
  );
}

export default App;
