import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/Soliha_Simulateur">
      <Routes>
        <Route path="/" element={<h1>🎉 Hello depuis la racine</h1>} />
        <Route path="*" element={<h2>404 not found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
