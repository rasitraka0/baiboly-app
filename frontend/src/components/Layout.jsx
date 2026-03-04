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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSideBarItem = () => {
    setIsSidebarOpen(false);
  };

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
      <Header
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex flex-1 overflow-hidden px-3 py-4 md:px-4 gap-4 flex-col md:flex-row">
        <div
          className={`${isSidebarOpen ? 'block' : 'hidden'} md:block h-full`}
        >
          <Sidebar
            testament={testament}
            setTestament={setTestament}
            recherche={recherche}
            setRecherche={setRecherche}
            livresFiltres={livresFiltres}
            livreId={livreId}
            onglet={onglet}
            setOnglet={setOnglet}
            onItemClick={handleSideBarItem}
          />
        </div>

        <div className="flex-1 bg-gray-800 rounded-lg overflow-y-auto custom-scrollbar">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
