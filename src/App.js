import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import RenoverLogementSimulateur from './components/simulateurs/RenoverLogementSimulateur';
import RenoverCoproprieteSimulateur from './components/simulateurs/RenoverCoproprieteSimulateur';
import AdapterLogementSimulateur from './components/simulateurs/AdapterLogementSimulateur';
import LouerBienSimulateur from './components/simulateurs/LouerBienSimulateur';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/renover-logement" element={<RenoverLogementSimulateur />} />
        <Route path="/renover-copropriete" element={<RenoverCoproprieteSimulateur />} />
        <Route path="/adapter-logement" element={<AdapterLogementSimulateur />} />
        <Route path="/louer-bien" element={<LouerBienSimulateur />} />
      </Routes>
    </Router>
  );
}

export default App;
