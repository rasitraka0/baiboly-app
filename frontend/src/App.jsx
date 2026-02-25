import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Accueil from './pages/Accueil';
import Lecture from './pages/Lecture';
import Recheche from './pages/Recheche';
import Layout from './components/Layout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Accueil />} />
          <Route path="/lecture/:livreId/:chapitre" element={<Lecture />} />
          <Route path="/recherche" element={<Recheche />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
