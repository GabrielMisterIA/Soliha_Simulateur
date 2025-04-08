import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>✅ Accueil Soliha</h1>} />
      <Route path="*" element={<h2>404 - Page non trouvée</h2>} />
    </Routes>
  );
}

export default App;
