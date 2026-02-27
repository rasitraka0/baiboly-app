import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Accueil from './pages/Accueil';
import Lecture from './pages/Lecture';

import Layout from './components/Layout';
import LectureMofonaina from './pages/LectureMofonaina';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Accueil />} />
          <Route path="/lecture/:livreId/:chapitre" element={<Lecture />} />
          <Route
            path="/lectureMofonaina/:dateActif"
            element={<LectureMofonaina />}
          />
          <Route path="/lectureMofonaina" element={<LectureMofonaina />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
