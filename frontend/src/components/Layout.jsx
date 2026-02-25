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
    <div className="flex h-screen">
      <div className="w-64">
        <h2>Testamenta Taloha</h2>
        {taloha.map((l) => {
          return (
            <Link to={`/lecture/${l.id}/1`} key={l.id}>
              {l.nom}
            </Link>
          );
        })}{' '}
        <h2>Testamenta Vaovao</h2>
        {vaovao.map((l) => {
          return (
            <Link to={`/lecture/${l.id}/1`} key={l.id}>
              {l.nom}
            </Link>
          );
        })}
      </div>
      <div className="flex-1">
        {/* Panneau droit - contenu */}
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
