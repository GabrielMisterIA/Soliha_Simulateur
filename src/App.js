import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<h1>🚀 Hello via HashRouter</h1>} />
        <Route path="*" element={<h2>404 😵</h2>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
