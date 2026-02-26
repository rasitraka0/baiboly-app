import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function SideMofonaina() {
  const [mois, setMois] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMois = async () => {
      const response = await axios.get(
        'http://localhost:3000/api/mofonaina/moisActuel',
      );
      setMois(response.data);
      setLoading(false);
    };
    fetchMois();
  }, []);
  console.log(mois);

  function dateTransform(date) {
    return new Date(date).toLocaleDateString('fr-FR', {
      month: 'long',
      day: 'numeric',
    });
  }
  const isToday = (date) => {
    const today = new Date();
    const d = new Date(date);

    return (
      d.getDate() === today.getDate() &&
      d.getMonth() === today.getMonth() &&
      d.getFullYear() === today.getFullYear()
    );
  };

  if (loading) return <div>Chargement....</div>;

  return (
    <div className="flex flex-col h-full">
      <h2 className="pb-2 uppercase text-center m-2 ">{mois[0].theme}</h2>
      <div className="overflow-y-auto flex-1 px-2 pb-2 custom-scrollbar">
        {mois.map((m) => {
          return (
            <div
              key={m.id}
              className={`flex flex-col gap-1 py-3 border-b border-gray-200 hover:bg-gray-700  hover:text-yellow-400 cursor-pointer rounded px-2 ${isToday(m.date) ? 'bg-gray-700 text-yellow-400 ' : ''}`}
            >
              <span className="text-sm text-gray-500">
                {dateTransform(m.date)}
              </span>
              <span className="font-medium">
                {m.livre_nom} {m.chapitre}:{m.verset_debut}-{m.verset_fin}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
