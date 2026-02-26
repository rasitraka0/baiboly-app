import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

function Layout() {
  const [livres, setLivre] = useState([]);
  const [testament, setTestament] = useState('taloha');
  const [recherche, setRecherche] = useState('');
  const { livreId } = useParams();
  const [onglet, setOnglet] = useState('baiboly');
  useEffect(() => {
    const fetchLivres = async () => {
      const response = await axios.get('http://localhost:3000/api/livres');
      setLivre(response.data);
    };
    fetchLivres();
  }, []);

  const taloha = livres.filter((l) => l.ordre <= 39);
  const vaovao = livres.filter((l) => l.ordre >= 40);
  const livresAffiches = testament === 'taloha' ? taloha : vaovao;

  const livresFiltres = livresAffiches.filter((l) =>
    l.nom.toLowerCase().includes(recherche.toLowerCase()),
  );

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <Header />

      <div className="flex flex-1 overflow-hidden p-4 gap-4">
        <Sidebar
          testament={testament}
          setTestament={setTestament}
          recherche={recherche}
          setRecherche={setRecherche}
          livresFiltres={livresFiltres}
          livreId={livreId}
          onglet={onglet}
          setOnglet={setOnglet}
        />

        <div className="flex-1 bg-gray-800 rounded-lg overflow-y-auto custom-scrollbar">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
