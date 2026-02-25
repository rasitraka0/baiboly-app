import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';

function Layout() {
  const [livres, setLivre] = useState([]);

  useEffect(() => {
    const fetchLivres = async () => {
      const response = await axios.get('http://localhost:3000/api/livres');
      setLivre(response.data);
    };
    fetchLivres();
  }, []);

  const taloha = livres.filter((l) => l.ordre <= 39);
  const vaovao = livres.filter((l) => l.ordre >= 40);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Panneau gauche */}
      <div className="w-64 bg-gray-800 flex flex-col overflow-hidden">
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-yellow-400 font-bold text-xl">Baiboly</h1>
        </div>
        <div className="overflow-y-auto flex-1 p-2">
          <h2 className="text-gray-400 text-xs uppercase font-bold px-2 py-2">
            Testamenta Taloha
          </h2>
          {taloha.map((l) => (
            <Link
              to={`/lecture/${l.id}/1`}
              key={l.id}
              className="block px-3 py-2 rounded hover:bg-gray-700 text-gray-200 hover:text-yellow-400"
            >
              {l.nom}
            </Link>
          ))}
          <h2 className="text-gray-400 text-xs uppercase font-bold px-2 py-2 mt-4">
            Testamenta Vaovao
          </h2>
          {vaovao.map((l) => (
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

      {/* Panneau droit */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
