import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Layout() {
  const [livres, setLivre] = useState([]);
  const [testament, setTestament] = useState('taloha');
  const [recherche, setRecherche] = useState('');
  const navigate = useNavigate();

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

  const handleRecherche = (e) => {
    if (e.key === 'Enter' && recherche.trim()) {
      navigate(`/recherche?q=${recherche}`);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <h1 className="text-white font-bold text-xl">
          Baiboly sy Mofon'aina Malagasy
        </h1>
        <p className="text-gray-400 text-sm">
          Ny Soratra Masina amin'ny teny Malagasy
        </p>
      </header>

      <div className="flex flex-1 overflow-hidden p-4 gap-4">
        <div className="w-86 bg-gray-800 rounded-lg flex flex-col overflow-hidden ">
          <div className="flex border-b border-gray-700">
            <button className="flex-1 py-3 text-yellow-400 font-bold border-b-2 border-yellow-400">
              Baiboly
            </button>
            <button className="flex-1 py-3 text-gray-400 hover:text-white">
              Mofon'aina
            </button>
          </div>

          <div className="flex gap-2 p-3">
            <button
              onClick={() => setTestament('taloha')}
              className={`flex-1 py-2 rounded font-bold text-sm ${
                testament === 'taloha'
                  ? 'bg-yellow-400 text-gray-900'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
            >
              Taloha
            </button>
            <button
              onClick={() => setTestament('vaovao')}
              className={`flex-1 py-2 rounded font-bold text-sm ${
                testament === 'vaovao'
                  ? 'bg-yellow-400 text-gray-900'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
            >
              Vaovao
            </button>
          </div>

          <div className="px-3 pb-3">
            <input
              type="text"
              placeholder="Tadiavo ny boky..."
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
              onKeyDown={handleRecherche}
              className="w-full bg-gray-700 text-gray-200 placeholder-gray-500 rounded px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          <div className="overflow-y-auto flex-1 px-2 pb-2 custom-scrollbar">
            {livresAffiches.map((l) => (
              <Link
                to={`/lecture/${l.id}/1`}
                key={l.id}
                className="block px-3 py-2 rounded hover:bg-gray-700 text-gray-200 hover:text-yellow-400"
              >
                {l.nom}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex-1 bg-gray-800 rounded-lg overflow-y-auto custom-scrollbar">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
