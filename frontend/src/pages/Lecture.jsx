import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Lecture() {
  const [verset, setVerset] = useState([]);
  const { livreId, chapitre } = useParams();
  const [chapitres, setChapitres] = useState([]);

  useEffect(() => {
    const fetchVersets = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/livres/${livreId}/chapitres/${chapitre}`,
      );
      setVerset(response.data);
    };
    fetchVersets();
  }, [livreId, chapitre]);

  useEffect(() => {
    const fetchChapitres = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/livres/${livreId}/chapitres`,
      );
      setChapitres(response.data);
    };
    fetchChapitres();
  }, [livreId]);

  return (
    <div className="p-6 text-white">
      {/* Grille des chapitres */}
      <div className="flex flex-wrap gap-2 mb-6">
        {chapitres.map((c) => (
          <Link
            to={`/lecture/${livreId}/${c.chapitre}`}
            key={c.chapitre}
            className={`w-10 h-10 flex items-center justify-center rounded text-sm font-bold
              ${
                parseInt(chapitre) === c.chapitre
                  ? 'bg-yellow-400 text-gray-900'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
          >
            {c.chapitre}
          </Link>
        ))}
      </div>

      {/* Liste des versets */}
      <div className="space-y-4">
        {verset.map((v) => (
          <div key={v.id} className="flex gap-4">
            <span className="text-yellow-400 font-bold min-w-6">
              {v.verset}
            </span>
            <span className="text-gray-200 leading-relaxed">{v.texte}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
